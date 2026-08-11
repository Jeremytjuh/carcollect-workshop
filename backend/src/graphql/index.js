import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

// Modules Resolvers | Schemas
import { userSchemas, userResolvers } from "#modules/user/index.js";
import { gameEventSchemas, gameEventResolvers } from "#modules/game_event/index.js";

const rootSchema = gql`
  # {Root Schema}
  scalar Date
  scalar Upload

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const resolvers = [
  ...userResolvers,
  ...gameEventResolvers,
];

const typeDefs = [
  ...userSchemas,
  ...gameEventSchemas,
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
