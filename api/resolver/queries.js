const {helloUser} = require("./user/user.query")
const {getPosts} = require("./post/post.query");
module.exports = {
    helloUser,
    getPosts
}