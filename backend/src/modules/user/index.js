import userResolver from "./resolvers/user.resolver.js";

// Utils
import { loadGraphQLFile } from "#helpers/graphql.helper.js";

export const userResolvers = [
  userResolver,
];

export const userSchemas = [
  loadGraphQLFile(import.meta.url, "graphql/user.graphql"),
];

export default {
  userResolvers,
  userSchemas,
};
