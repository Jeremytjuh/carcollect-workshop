import { gql } from "@apollo/client";

/* Update me */
export const UPDATE_ME = gql`
  mutation updateMe($dataInput: MeInput) {
    updateMe(dataInput: $dataInput) {
      id
      first_name
      last_name
      username
      bio
      country
      city
      image
    }
  }
`;
