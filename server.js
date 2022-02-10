const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const typeDefs = require("./api/typeDefs");
const resolvers = require("./api/resolver/index");
require("dotenv").config()
const authHelper = require("./api/resolver/Authorization/authorization")
const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context:({req})=>{
    const authToken =  req.headers.authentication || ''
      if (authToken){
        const token =  authHelper.verifyAuth(authToken)
        if (!token) throw new Error('You must logged in')
        return token
      }
    },
    formatError: (err) => {
      return ({
        message: err.originalError?.message || err.message,
        code: err.originalError?.code || 400
      })
    }
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("Hello! From apollo express");
  });

  const dbUri = process.env.PRODUCTION_DB || process.env.LOCAL_DB

  await mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("mongodb connected...");
  const port = 4000;
  app.listen(port, () =>
      console.log(`Server started\n http://localhost:${port}/graphql`)
  );
};

 startServer();