const postMutation = require("./api/post/post.mutation");
const postQuery = require("./api/post/post.query");

const resolvers = {
  Query: {
    ...postQuery,
  },
  Mutation: {
    ...postMutation,
  },
};

module.exports = resolvers;
