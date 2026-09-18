import { gql } from "@apollo/client";

/* Creates a new vehicle */
export const CREATE_VEHICLE = gql`
  mutation createVehicle($dataInput: VehicleInput!) {
    createVehicle(dataInput: $dataInput)
  }
`;

/* Updates a vehicle */
export const UPDATE_VEHICLE = gql`
  mutation updateVehicle($vehicleId: ID!, $dataInput: VehicleInput!) {
    updateVehicle(vehicleId: $vehicleId, dataInput: $dataInput) {
      id
      name
    }
  }
`;
