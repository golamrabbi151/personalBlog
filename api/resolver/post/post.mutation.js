const Post = require("./post.model");
const appHelper = require("../appHelper/index")
module.exports = {
 createPost : async (parent, args, context) => {
  const {req = {}} = context
  const { userId } = req
  appHelper.validateId(userId)
  const { inputData } = args;
  const { title, description } = inputData;
  const post = new Post({ title, description });
  await post.save();
  return post;
},
 deletePost: async (parent, args, context) => {
  const {req = {}} = context
  const { userId } = req
  appHelper.validateId(userId)
  const { inputData } = args
  const { _id = '' } = inputData
  appHelper.validateId(_id)
  const post = await Post.findOneAndDelete({_id})
  return post
 }
}
