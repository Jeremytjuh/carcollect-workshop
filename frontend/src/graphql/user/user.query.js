import { gql } from "@apollo/client";

/* Get the current user */
export const GET_ME = gql`
  query me {
    me {
      id
      first_name
      last_name
      email
      phone_number
      birth_date
      status
      bio
      tagline
      username
      favorite_types
      city
      country
    }
  }
`;
