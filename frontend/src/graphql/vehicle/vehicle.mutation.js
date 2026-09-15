import { gql } from "@apollo/client";

/* Creates a new vehicle */
export const CREATE_VEHICLE = gql`
  mutation createVehicle($dataInput: VehicleInput!) {
    createVehicle(dataInput: $dataInput) {
      name
    }
  }
`;
