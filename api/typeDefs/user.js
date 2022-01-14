const { gql } = require("apollo-server-express");

module.exports = gql`
    type User {
        name: String
        email: String
        password: String
        gender: String
    }
    input InsertUserType {
        name: String!
        email: String!
        password: String!
        gender: String!
    }
    type Query {
        helloUser: String
   } 
   type Mutation {
        userRegistration(inputData: InsertUserType):User
    }
`;