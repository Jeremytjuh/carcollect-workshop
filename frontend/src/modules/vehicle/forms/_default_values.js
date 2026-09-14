// Sets the default values for vehicle update form
export const setUpdateVehicleValues = vehicle => ({
  name: vehicle.name,
  description: vehicle.description,
  brand: vehicle.brand,
  model: vehicle.model,
  version: vehicle.version,
  type: vehicle.type,
  license_plate: vehicle.license_plate,
});
