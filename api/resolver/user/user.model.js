const {isEmail} = require('validator')
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'Invalid email']
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['male','female']
    }
},{timestamps: true})

userSchema.post('save', function (error, doc, next) {
    if (error.code === 11000)
        next(new Error('Email already exist'));
    else next(error);
});

const User = mongoose.model('user', userSchema)
module.exports = User