const Post = require("./post.model");
const getPosts = async (query = {}) => {
  const posts = await Post.find(query);
  return posts;
};

const getPostsQuery = async (req) => {
  try {
    const { id, title } = req;
    console.log('qequest data: ', req);
    // if (_id.length <= 0) {
    //   throw new Error("Id not valid");
    // }
    // if (title.length <= 0) {
    //   throw new Error("Title not valid");
    // }

    const postData = await getPosts({ id, title });
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
