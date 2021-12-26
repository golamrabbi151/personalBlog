const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello: String
    getPosts: [Post]
  }
  input createPostInput {
    title: String
    description: String
  }
  type Mutation {
    createPost(inputData: createPostInput): Post
  }
`;

module.exports = typeDefs;
