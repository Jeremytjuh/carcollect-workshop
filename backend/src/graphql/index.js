import fs from "fs";
import gql from "graphql-tag";
import { fileURLToPath } from "node:url";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

// Modules Resolvers | Schemas
import vehicleResolver from "../vehicle/vehicle.resolver.js";
import userResolver from "../user/user.resolver.js";

function loadGraphQLFile(baseDirectory, filePath) {
  const url = new URL(filePath, baseDirectory);
  const content = fs.readFileSync(fileURLToPath(url), "utf8");
  return gql`${content}`;
}

const rootSchema = gql`
  scalar Date

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const resolvers = [
  userResolver,
  vehicleResolver,
];

const typeDefs = [
  loadGraphQLFile(import.meta.url, "../user/user.graphql"),
  loadGraphQLFile(import.meta.url, "../vehicle/vehicle.graphql"),
  rootSchema,
];

export const executableSchema = () => {
  const mergedTypeDefs = mergeTypeDefs(typeDefs);
  const mergedResolvers = mergeResolvers(resolvers);

  const schema = makeExecutableSchema({ resolvers: mergedResolvers, typeDefs: mergedTypeDefs });
  return schema;
};

export default {
  executableSchema,
};
