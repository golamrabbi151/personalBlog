const  Post  = require("./model/Post.model");
const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
    getPosts: async () => {
      const posts = await Post.find()
      return posts
    }
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { inputData } = args;
      const { title, description } = inputData;
      const post = new Post({ title, description });
      await post.save();
      return post;
    },
  },
};

module.exports = resolvers;
