import { gql } from "@apollo/client";

/* Update me */
export const UPDATE_ME = gql`
  mutation updateMe($dataInput: MeInput) {
    updateMe(dataInput: $dataInput) {
      id
      email
      first_name
      last_name
      phone_number
      birth_date
      image
    }
  }
`;
