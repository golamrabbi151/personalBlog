const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers.js");
const mongoose = require("mongoose");

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("Hello! From apollo express");
  });
  await mongoose.connect("mongodb://localhost:27017/myblog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("mongodb connected...");

  app.listen(5000, () => console.log("Server start on port 5000"));
};

startServer();
