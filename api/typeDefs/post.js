const { gql } = require("apollo-server-express");

module.exports = gql`
    scalar Date
  type Post {
      _id: ID
      title: String
      description: String,
      createdAt: Date
      updatedAt: Date
  }

  input QueryPostDataType {
      _id: ID
      title: String
  }

 extend type Query {
    getPosts(queryData: QueryPostDataType): [Post]
  }
  input createPostInputType {
    title: String
    description: String
  }
    input deletePostInputType {
    _id: String
    }
 extend type Mutation {
    createPost(inputData: createPostInputType): Post
     deletePost(inputData: deletePostInputType): Post
  }
`;
