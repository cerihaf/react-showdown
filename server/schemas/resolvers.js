const { AuthenticationError } = require("apollo-server-express");
const { User, Comment, Matchup, Vote } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUser: async (parent, { id }) => {
      //for debugging (not for users)
      try {
        const userData = await User.findOne({
          where: { id },
          raw: true,
        });

        console.log(userData);
        return userData;
      } catch (err) {
        console.log("Couldn't find user!");
        return err;
      }
    },
    getMatchup: async (parent, { id }, context) => {
      //get a single matchup (this is an inefficient way of doing this, feel free to change)
      if (!context.user) return;
      console.log(context.user);
      const user_id = context.user.id; //CHANGE THIS TO JWT USER ID OR SOMETHING
      const matchupData = await Matchup.findOne({ where: { id }, raw: true });
      console.log(matchupData);
      if (!matchupData) return;
      //matchup exists
      const voteSearch = await Vote.findOne({
        where: { matchup_id: id, user_id },
        raw: true,
      });
      const hasVoted = voteSearch !== null; //user hasVoted true or false
      const voteData = await Vote.findAll({
        where: { matchup_id: id },
        attributes: ["vote"], //only need to know the vote counts
        raw: true,
      });
      const comments = await Comment.findAll({
        where: { matchup_id: id },
        // attributes: ["comment", "color", "username", "createdAt"],
        raw: true,
        //users only need to know these
      });
      let blueVoteCount = 0;
      for (let i = 0; i < voteData.length; i++) {
        if (voteData[i].vote === 1) blueVoteCount++;
      }
      const redVoteCount = voteData.length - blueVoteCount;
      //SEND THE MATCHUP DATA HERE
      //res.render('home', {layout:'main', date, hasVoted, animal_1, animal_2, blueVoteCount, redVoteCount, comments, matchup_id});
      const data = {
        ...matchupData,
        blueVoteCount,
        redVoteCount,
        hasVoted,
        comments,
      };
      console.log(data);
      return data;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      // expects {username: 'Lernantino', password: 'password1234'}
      const user = await User.create(args);

      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({
        where: { username },
      });

      const correctPW = user.checkPassword(password);
      if (!correctPW) {
        console.log("Incorrect password!");
        return;
      }

      const token = signToken(user);
      return { token, user };
    },
    vote: (parent, { vote, matchup_id }, context) => {
      const user_id = context.user.id; //get user_id with JWT
      console.log(user_id);
      Vote.findOne({ where: { matchup_id, user_id } })
        .then((voteSearch) => {
          if (voteSearch === null) {
            //user hasn't voted yet on this matchup
            Vote.create({
              vote: vote,
              matchup_id: matchup_id,
              user_id: user_id,
            })
              .then((userVote) => console.log("Vote received!"))
              .catch((err) => {
                console.log(err);
                return err;
              });
          } else console.log("User has already voted on this!");
        })
        .catch((err) => {
          console.log("Find one vote error!");
          console.log(err);
          return err;
        });
    },
    comment: (parent, { comment, color, matchup_id }, context) => {
      //vote on a matchup (triggered in a client side js script)
      const user_id = context.user.id;
      Vote.findOne({
        where: { matchup_id, user_id },
        include: {
          model: User,
          where: { id: user_id },
        },
      }).then((voteSearch) => {
        if (voteSearch !== null) {
          //user has voted on this matchup, can comment
          //1 = blue, 2 = red (rendered client side)
          if (voteSearch.vote === 1 || 2) {
            color = voteSearch.vote;
            const username = voteSearch.user.username;
            Comment.create({
              comment: comment,
              color: color,
              matchup_id: matchup_id,
              user_id: context.user.id, //get user ID with JWT!
              username: username,
            }) //**do a matchup route get request after this, it will render comments and votes**
              .then((commentData) => res.json(commentData))
              .catch((err) => {
                console.log("Could not post comment!");
                return err;
              });
          } else {
            console.log("user has not voted on this yet");
            return err;
          }
        } else {
          console.log("user has not voted on this yet");
          return err;
        }
      });
    },
  },
};

module.exports = resolvers;
