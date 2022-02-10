const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userHelper = require("./user.helper")
const User = require("./user.model")
module.exports = {
    getUsers: async (parent, args) => {
        const {queryData, options} = args
        const {skip = 0, limit = 20, sort = {createdAt: 1}} = options
        const body = {
            queryData:JSON.parse(JSON.stringify(queryData)),
            options:{
                skip,
                limit,
                sort
            }
        }
       const user = await userHelper.getUserByQuery(body)
    return user
    }
}