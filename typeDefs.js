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
  input createPostInputType {
    title: String
    description: String
  }
  type Mutation {
    createPost(inputData: createPostInputType): Post
  }
`;

module.exports = typeDefs;
