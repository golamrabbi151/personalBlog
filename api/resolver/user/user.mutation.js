const bcrypt = require("bcryptjs")
const User = require("./user.model");
const appHelper = require("../appHelper/index")
module.exports = {
    userRegistration: async (parent, args, context, info) => {
        const {inputData} = args;
        let data = JSON.stringify(inputData);
        data = JSON.parse(data)
        const {
            name,
            email,
            password,
            gender
        } = data
        const encryptPassword = await bcrypt.hash(password, 10)
        const userData = new User({
            name,
            email,
            password: encryptPassword,
            gender
        });
        const result = await userData.save();
        return result;
    },
    deleteUser: async (parent, args, context, info) => {
        const {inputData} = args;
        let data = JSON.stringify(inputData);
        data = JSON.parse(data)
        const {_id} = data
        appHelper.validateId(_id)
        const result = await User.findOneAndDelete({_id})
        return result;
    }
}