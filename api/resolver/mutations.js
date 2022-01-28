const userMutations = require("./user/user.mutation")
const postMutations = require("./post/post.mutation");

module.exports = {
    ...postMutations,
    ...userMutations
}