const { AuthenticationError } = require("apollo-server-express");
const { User, Comment, Matchup, Vote } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getAllUsers: async (parent,) =>{ //for debugging (not for users)
      try{
        const userData = await User.findAll({
          attributes: { exclude: ["password"] }
        })
        return userData;
      }
      catch(err){
        console.log("Couldn't find users!");
        return err;
      }
    },
    getUser: async (parent, ID) =>{ //for debugging (not for users)
      try{
        const userData = await User.findOne({
          where: { id: ID }
        })
      }
      catch(err){
        console.log("Couldn't find user!");
        return err;
      }
    },
    getMatchup: (parent, ID, context) =>{ //get a single matchup (this is an inefficient way of doing this, feel free to change)
      if (!context.user) return;
      const user_id = req.session.user_id; //CHANGE THIS TO JWT USER ID OR SOMETHING
      const matchup_id = ID;
      Matchup.findOne({where: {id: matchup_id}})
      .then(matchupData =>{
          if (matchupData !== null){ //matchup exists
              Vote.findOne({where: {matchup_id, user_id}})
              .then(voteSearch =>{
                  const hasVoted = (voteSearch !== null); //user hasVoted true or false
                  Vote.findAll({
                      where: {matchup_id},
                      attributes: ['vote'] //only need to know the vote counts
                  })
                  .then(voteData =>{
                      Comment.findAll({
                          where: {matchup_id},
                          attributes: ['comment', 'color', 'username', 'createdAt'],
                          raw: true
                          //users only need to know these
                      })
                      .then(comments =>{
                          let blues = 0
                          for (let i = 0; i < voteData.length; i++){
                              if (voteData[i].vote === 1) blues++;
                          }
                          const reds = voteData.length - blues;
                          const animal_1 = matchupData.animal_1;
                          const animal_2 = matchupData.animal_2;
                          const date = new Date().getFullYear();
                          //SEND THE MATCHUP DATA HERE
                          //res.render('home', {layout:'main', date, hasVoted, animal_1, animal_2, blues, reds, comments, matchup_id});
                      })
                      .catch(err => {
                          console.log('Comment data not found!');
                         // res.status(500).json(err);
                      })
                  })
                  .catch(err => {
                      console.log('Vote data not found!');
                      //res.status(500).json(err);
                  })
              })
              .catch(err => {
                  console.log('Matchup data not found!');
                  //res.status(500).json(err);
              })
          }
          else console.log('No matchup with that ID!');
      })
      .catch(err => {
          console.log('Matchup data not found!');
          //res.status(500).json(err);
      })
      .catch((err) => {
        console.log("Matchup data not found!");
        //res.status(500).json(err);
      });  
    },
  },

  Mutation: {
    addUser: (parent, args) => {
      // expects {username: 'Lernantino', password: 'password1234'}
      User.create(args)
        .then((dbUserData) => {
          const token = signToken(dbUserData);
          return { token, dbUserData };
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    login: (parent, { username, password }) => {
      // expects {username: 'Lernantino', password: 'password1234'}
      User.findOne({
        where: { username: username} })
        .then((dbUserData) => {
        if (!dbUserData) {
          console.log("No user with those credentials!");
          return;
        }
        const correctPW = dbUserData.checkPassword(password);
        if (!correctPW) {
          console.log("Incorrect password!");
          return;
        }
        const token = signToken(dbUserData);
        return { token, dbUserData };
      });
    },
    vote: (parent, {vote, matchup_id}) => {
      const user_id = req.session.user_id; //get user_id with JWT
      console.log(user_id);
      Vote.findOne({where: {matchup_id, user_id}})
      .then(voteSearch =>{
          if (voteSearch === null){ //user hasn't voted yet on this matchup
              Vote.create({
                  vote: vote,
                  matchup_id: matchup_id,
                  user_id: user_id
              })
              .then(userVote => console.log("Vote received!"))
              .catch(err => {
                  console.log(err);
                  return err;
              })
          }
          else console.log("User has already voted on this!");
      })
      .catch(err => {
          console.log('Find one vote error!');
          console.log(err);
          return err;
      })
    },
    comment: (parent, {comment, color, matchup_id}) => {
      //vote on a matchup (triggered in a client side js script)
      const { comment, matchup_id } = req.body;
      const user_id = req.session.user_id;
      Vote.findOne({
        where: { matchup_id, user_id },
        include: {
          model: User,
          where: { id: user_id }
        }
      })
      .then(
        (voteSearch) => {
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
                    user_id: req.session.user_id, //get user ID with JWT!
                    username: username
                  }) //**do a matchup route get request after this, it will render comments and votes**
                    .then((commentData) => res.json(commentData))
                    .catch((err) => {
                      console.log("Could not post comment!");
                      return err;
                    });
            } else{
              console.log('user has not voted on this yet');
              return err;
            }
          } else{
            console.log('user has not voted on this yet');
            return err;
          }
        }
      );
    }
  }
};

module.exports = resolvers;
