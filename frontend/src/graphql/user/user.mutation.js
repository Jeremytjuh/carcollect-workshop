import { gql } from "@apollo/client";

/* Update me */
export const UPDATE_ME = gql`
  mutation updateMe($dataInput: MeInput) {
    updateMe(dataInput: $dataInput) {
      id
      first_name
      last_name
      # // * Add missing field that is being updated within the profile, to make the caching work
      bio
      country
      city
      image
    }
  }
`;

/* Adds a vehicle to the user's favorites */
export const ADD_VEHICLE_TO_FAVORITES = gql`
  mutation addVehicleToFavorites($vehicleId: ID!) {
    addVehicleToFavorites(vehicleId: $vehicleId) {
      id
      favorites
    }
  }
`;
