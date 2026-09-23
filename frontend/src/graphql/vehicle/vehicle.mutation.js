import { gql } from "@apollo/client";

/* Creates a new vehicle */
export const CREATE_VEHICLE = gql`
  mutation createVehicle($dataInput: VehicleInput!) {
    createVehicle(dataInput: $dataInput)
  }
`;

/* Deletes an existing vehicle */
export const DELETE_VEHICLE = gql`
  mutation deleteVehicle($vehicleId: ID!) {
    deleteVehicle(vehicleId: $vehicleId)
  }
`;
