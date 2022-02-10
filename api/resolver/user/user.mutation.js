const bcrypt = require("bcryptjs")
const User = require("./user.model");
const appHelper = require("../appHelper/index")
const jwt = require("jsonwebtoken");
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
    loginUser: async (parent, args) => {
        const {inputData} = args
        const { email, password } = inputData
        const user = await User.findOne({email})
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid){
            throw new Error("Invalid password")
        }
        const token = jwt.sign({ userId: user._id , role:"admin"}, process.env.AUTH_SECRET)

        return {
            _id: user._id,
            name: user.name,
            token: token,
        }
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