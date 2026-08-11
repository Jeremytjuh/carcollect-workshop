import gameEventResolver from "./resolvers/game_event.resolver.js";

// Utils
import { loadGraphQLFile } from "#helpers/graphql.helper.js";

export const gameEventResolvers = [
  gameEventResolver,
];

export const gameEventSchemas = [
  loadGraphQLFile(import.meta.url, "graphql/game_event.graphql"),
];

export default {
  gameEventResolvers,
  gameEventSchemas,
};
