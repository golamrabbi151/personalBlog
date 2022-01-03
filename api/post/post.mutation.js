const Post = require("./post.model");

module.exports = {
  createPost: async (parent, args, context, info) => {
    const { inputData } = args;
    const { title, description } = inputData;
    const post = new Post({ title, description });
    await post.save();
    return post;
  },
};
