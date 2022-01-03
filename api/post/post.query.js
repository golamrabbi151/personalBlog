const Post = require("./post.model");

module.exports = {
  hello: () => {
    return "Hello world";
  },
  getPosts: async (parente, args, context) => {
    const posts = await Post.find();
    return posts;
  },
};
