import { gql } from "@apollo/client";

/* Get a single game event */
export const GET_GAME_EVENT = gql`
  query getGameEvent($gameEventId: ID) {
    id
    name
  }
`;
