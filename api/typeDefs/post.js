const { gql } = require("apollo-server-express");

module.exports = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  input QueryPostDataType {
    _id: ID
    title: String
  }

  type Query {
    getPosts(queryData: QueryPostDataType): Post
  }
  input createPostInputType {
    title: String
    description: String
  }
  type Mutation {
    createPost(inputData: createPostInputType): Post
  }
`;
