const userQuery = require("./user/user.query")
const postQuery = require("./post/post.query");
module.exports = {
    ...userQuery,
    ...postQuery
}