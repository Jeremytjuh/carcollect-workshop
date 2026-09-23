import { gql } from "@apollo/client";

/* Get the current user */
export const GET_ME = gql`
  query me {
    me {
      id
      first_name
      last_name
      username
      bio
      country
      city
      image
      favorites
    }
  }
`;
