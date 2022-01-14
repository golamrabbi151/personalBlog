const Post = require("./post.model");
const createPost = async (parent, args) => {
  const { inputData } = args;
  const { title, description } = inputData;
  const post = new Post({ title, description });
  await post.save();
  return post;
}
module.exports = {createPost};
