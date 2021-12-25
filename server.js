const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers.js");

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("Hello!");
  });
  app.listen(4000, () => console.log("Server start on port 4000"));
};

startServer()