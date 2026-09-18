// Models
import VehicleModel from "./vehicle.model.js";
import UserModel from "../user/user.model.js";

// Query
// ----------------------------------------------------------------
/* Retrieves all vehicles */
const getVehicles = async (root, args, { next }) => {
  try {
    const vehicles = await VehicleModel.find({}).populate("created_by");

    return vehicles;
  } catch (error) {
    return next(error);
  }
};

/* Retrieves a single vehicle */
const getVehicle = async (root, { vehicleId }, { next }) => {
  try {
    const vehicle = await VehicleModel.findById(vehicleId).populate("created_by");

    return vehicle;
  } catch (error) {
    return next(error);
  }
};

// Mutation
// ----------------------------------------------------------------
/* Creates a new vehicle */
const createVehicle = async (root, { dataInput }, { req, next }) => {
  try {
    const currentUser = await UserModel.findById(req.session.userId);

    await VehicleModel.create({
      ...dataInput,
      created_by: currentUser,
    });

    return true;
  } catch (error) {
    return next(error);
  }
};

/* Updates an existing vehicle */
const updateVehicle = async (root, { vehicleId, dataInput }, { next }) => {
  try {
    const updatedVehicle = await VehicleModel.findByIdAndUpdate(vehicleId, dataInput, { runValidators: true, returnDocument: "after" });

    return updatedVehicle;
  } catch (error) {
    return next(error);
  }
};

// Resolvers
const vehicleResolver = {
  Query: {
    getVehicles,
    getVehicle,
  },

  Mutation: {
    createVehicle,
    updateVehicle,
  },
};

export default vehicleResolver;
