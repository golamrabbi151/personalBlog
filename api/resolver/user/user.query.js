const userHelper = require("./user.helper")
module.exports = {
    getUsers: async (parent, args) => {
        console.log('args: ', args)
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