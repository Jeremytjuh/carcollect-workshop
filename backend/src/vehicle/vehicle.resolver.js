// Models
import VehicleModel from "./vehicle.model.js";
import UserModel from "../user/user.model.js";

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

/* Deletes an existing vehicle */
const deleteVehicle = async (root, { vehicleId }, { req, next }) => {
  try {
    return null;
    const currentUser = await UserModel.findById(req.session.userId);
    const vehicle = await VehicleModel.findById(vehicleId);

    // * Implement security check with the two values below - only allow users to delete their own vehicle
    // const currentUserId = currentUser.id.toString();
    // const createdById = vehicle.created_by.toString();

    // * Delete vehicle functionality
    // ? Mongoose delete docs: https://mongoosejs.com/docs/8.x/docs/api/model.html#Model.prototype.deleteOne()

    return true;
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
    deleteVehicle,
  },
};

export default vehicleResolver;
