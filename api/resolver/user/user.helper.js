const User = require("./user.model")
module.exports = {
    getUserByQuery: async (body) => {
        const { queryData, options } = body
        console.log('query data: ', queryData)
        console.log('options: ', options)
        const { _id = ''  } = queryData
        const query = {}
        if(_id.length>0){
            query._id = _id
        }
        const { skip, limit, sort } = options
        console.log('query: ', query)
        console.log('options: ', options)
        const user = await User.find(query).sort(sort).skip(skip).limit(limit)
        console.log('user: ', user)
        return user
    }
}