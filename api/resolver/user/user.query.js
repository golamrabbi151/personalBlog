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
    },
    loginUser: async (parent, args) => {
        const {queryData} = args
        const { email, password } = queryData
        const user = await User.findOne({email})
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid){
            throw new Error("Invalid password")
        }
        const token = jwt.sign({ userId: user._id }, "app_secret")

        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            gender: user.gender,
            token: token,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt}
    }
}