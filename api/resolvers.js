const postMutation = require("./post/post.mutation");
const postQuery = require("./post/post.query");

const resolvers = {
  Query: {
    ...postQuery,
  },
  Mutation: {
    ...postMutation,
  },
};

module.exports = resolvers;
