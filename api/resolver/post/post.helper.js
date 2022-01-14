const { size } = require('lodash')
const Post = require("./post.model");
const getPosts = async (query = {}) => {
  const posts = await Post.find(query);
  return posts;
};

const getPostsQuery = async (req) => {
  try {
    const { _id, title } = req;
    console.log('request data: ', req);
    const query = {}
    if(size(_id)){
      query._id = _id
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
