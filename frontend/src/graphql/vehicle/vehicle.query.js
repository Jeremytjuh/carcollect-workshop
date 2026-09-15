import { gql } from "@apollo/client";

/* Retrieves all vehicles */
export const GET_VEHICLES = gql`
  query getVehicles {
    getVehicles {
      id
      name
      description
      brand
      model
      version
      type
      license_plate
      image
      created_by {
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
      description
      brand
      model
      version
      type
      license_plate
      image
      created_by {
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
        image
      }
    }
  }
`;
