import { gql } from "@apollo/client";

// Assignment 1
// ----------------------------------------------------------------
// Enable GraphQL caching by adding `id` to the mutation

// Assignment 2
// ----------------------------------------------------------------
// Add Phone number as an input in the update form

/* Update me */
export const UPDATE_ME = gql`
  mutation updateMe($dataInput: MeInput) {
    updateMe(dataInput: $dataInput) {
      # id
      email
      first_name
      last_name
      phone_number
      birth_date
      image
    }
  }
`;
