import { gql } from "@apollo/client";

export const CREATE_VEHICLE = gql`
  mutation createVehicle($dataInput: VehicleInput) {
    createVehicle(dataInput: $dataInput) {
      name
    }
  }
`;
