import cors from "cors";
import helmet from "helmet";
import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { executableSchema } from "#graphql/index.js";
import packageJson from "./package.json" with { type: "json" };

const env = process.env.APP_ENVIRONMENT || "local";
const port = process.env.PORT || 8000;

// Creating an express server
// -------------------------------------------------------------
const Server = express();

// Security
// -------------------------------------------------------------
Server.use(helmet({
  contentSecurityPolicy: env === "local" ? false : undefined,
  crossOriginEmbedderPolicy: env === "local" ? false : undefined,
}));

// Cors
// -------------------------------------------------------------
Server.use(cors({
  credentials: true,
  maxAge: 2592000,
  origin: "http://localhost:3000"
}));

// Parse JSON and URL-encoded via req.body
// -------------------------------------------------------------
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));

// Hardcoded session middleware
// -------------------------------------------------------------
Server.use((req, res, next) => {
  req.session = { userId: "68b446eced5d7815c25d64a4" };
  next();
});

// A simple home route
// -------------------------------------------------------------
Server.get("/", (req, res) => res.send({
  name: "CarCollection",
  message: "We are up and running!",
  version: `v${packageJson.version}`,
}));

// Health route
//-------------------------------------------------------------
Server.get("/health", (req, res) => res.send({
  status: "ok",
  date: new Date(),
  uptime: process.uptime(),
}));

// Create Apollo server and applying schema's and resolvers
// -------------------------------------------------------------
const startApolloServer = async () => {
  try {
    const schema = executableSchema();
    const server = new ApolloServer({
      schema,
      debug: env === "local",
      introspection: env === "local",
      // apollo: {
      //   key: process.env.APOLLO_API_KEY,
      //   graphRef: process.env.APOLLO_GRAPH_REF,
      // },
    });

    await server.start();

    Server.use(
      "/graphql",
      expressMiddleware(server, {
        context: ({ req, res }) => ({
          req,
          res,
          next: error => {
            console.error("Next Error", error);
            return error;
          },
        }),
      }),
    );

    return true;
  } catch (error) {
    return console.error("[Apollo Error]", error);
  }
};

// Apollo http server
// -------------------------------------------------------------
startApolloServer();

// Server and Database connection
// -------------------------------------------------------------
mongoose.connect(process.env.DATABASE_URI).then(() => {
  Server.listen(port);
  console.info(`🚀 ${env || "local development"} server ready at ${port}\n`);
  console.info("Using:");
  console.info(`- App: ${packageJson.name}`);
  console.info(`- Started at: ${new Date()}`);
}).catch(error => {
  console.error(error);
});
