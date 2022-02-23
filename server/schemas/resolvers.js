const { AuthenticationError } = require("apollo-server-express");
const { User, Comment, Matchup, Vote } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello World";
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create({
        username: args.username,
        email: args.email,
        password: args.password,
      });

      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = user.checkPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
