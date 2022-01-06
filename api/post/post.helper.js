const { size } = require('lodash')
const Post = require("./post.model");
const getPosts = async (query = {}) => {
  const posts = await Post.find(query);
  return posts;
};

const getPostsQuery = async (req) => {
  try {
    const { id, title } = req;
    console.log('qequest data: ', req);
    const query = {}
    if(size(id)){
      query.id = id
    }
    if (size(title)) {
      query.title = title
    }
    const postData = await getPosts(query);
    if (postData) {
      return postData;
    }
  } catch (error) {
    const errorMessage = error.message || "Internal server error";
    const statusCode = error.statusCode || 500;
    console.log("status code: ", statusCode);
    console.log("error message: ", errorMessage);
    console.log(
      "Error happen while get posts: " + { statusCode } + { errorMessage }
    );
  }
};

module.exports = {
  getPostsQuery,
};
