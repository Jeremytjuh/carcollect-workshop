import { gql } from "@apollo/client";

/* Get the current user */
export const GET_ME = gql`
  query me {
    me {
      id
      email
      first_name
      last_name
    }
  }
`;
