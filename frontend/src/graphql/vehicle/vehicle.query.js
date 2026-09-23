import { gql } from "@apollo/client";

/* Retrieves all vehicles */
export const GET_VEHICLES = gql`
  query getVehicles {
    getVehicles {
      id
      name
      brand
      model
      version
      type
      license_plate
      image
      created_by {
        id
        first_name
        last_name
        image
      }
    }
  }
`;

/* Retrieves a single vehicle by id */
export const GET_VEHICLE = gql`
  query getVehicle($vehicleId: ID!) {
    getVehicle(vehicleId: $vehicleId) {
      id
      name
      brand
      model
      version
      type
      license_plate
      image
      created_by {
        id
        first_name
        last_name
        username
        bio
        city
        country
        image
      }
    }
  }
`;
