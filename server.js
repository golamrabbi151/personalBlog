const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const typeDefs = require("./api/typeDefs");
const resolvers = require("./api/resolver/index");
const mongoose = require("mongoose");
require("dotenv").config()

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    formatError: (err) => {
      return ({
        message: err.originalError.message || err.message,
        code: err.originalError.code || 400
      })
    }
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("Hello! From apollo express");
  });

  const dbUri = process.env.PRODUCTION_DB

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