const PostHelper = require('./post.helper')
module.exports = {
  hello: () => {
    return "Hello world";
  },
  getPosts: async (parente, args, context) => {
    const { queryData } = args
    // const body = JSON.stringify(queryData)
    // console.log('query data after parse: ', body);
    const posts = await PostHelper.getPostsQuery(queryData)
    return posts;
  },
};
