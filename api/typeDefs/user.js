const { gql } = require("apollo-server-express");

module.exports = gql`
    scalar Obj
    scalar Date
    type User {
        _id: String
        name: String
        email: String
        password: String
        gender: String
        createdAt: Date
        updatedAt: Date
    }
    input InsertUserType {
        name: String!
        email: String!
        password: String!
        gender: String!
    }
    input QueryUserType {
        _id: String,
        email: String,
        gender: String
    }
    input Options {
        skip: Int
        limit: Int
        sort: Obj
    }
    input deleteUserInputType {
        _id: String
    }
    
    input loginQueryType {
        email: String,
        password: String
    }
    
    type UserLoginType {
        _id: String
        name: String
        email: String
        gender: String
        token: String
        createdAt: Date
        updatedAt: Date
    }
    
   type Query {
        getUsers(queryData: QueryUserType, options: Options):[User]
        loginUser(queryData: loginQueryType): UserLoginType
   } 
   type Mutation {
        userRegistration(inputData: InsertUserType):User
        deleteUser(inputData: deleteUserInputType):User
    }
`;