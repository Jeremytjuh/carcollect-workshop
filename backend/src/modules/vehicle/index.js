import vehicleResolver from "./resolvers/vehicle.resolver.js";

// Utils
import { loadGraphQLFile } from "#helpers/graphql.helper.js";

export const vehicleResolvers = [
  vehicleResolver,
];

export const vehicleSchemas = [
  loadGraphQLFile(import.meta.url, "graphql/vehicle.graphql"),
];

export default {
  vehicleResolvers,
  vehicleSchemas,
};
