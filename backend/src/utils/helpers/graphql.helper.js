import fs from "fs";
import { fileURLToPath } from "node:url";
import gql from "graphql-tag";

/**
 * Load GraphQL file from the graphql directory
 * @param {string} baseDirectory - base directory
 * @param {string} filePath - GraphQL file path
 */
export function loadGraphQLFile(baseDirectory, filePath) {
  const url = new URL(filePath, baseDirectory);
  const content = fs.readFileSync(fileURLToPath(url), "utf8");
  return gql`${content}`;
}

export default {
  loadGraphQLFile,
};
