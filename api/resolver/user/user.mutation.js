const User = require("./user.model");

const userRegistration = async (parent,args, context, info) => {
    const { inputData } = args;
    let data = JSON.stringify(inputData);
    data = JSON.parse(data)
    console.log('input data: ', data)
    const userData = new User(data);
    await userData.save();
    return userData;
}

module.exports = { userRegistration }