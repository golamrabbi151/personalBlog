const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  input QueryPostDataType {
    id: ID
    title: String
  }

  type Query {
    hello: String
    getPosts(queryData: QueryPostDataType): [Post]
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
