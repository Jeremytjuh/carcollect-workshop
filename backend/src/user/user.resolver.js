// Models
import UserModel from "./user.model.js";

/* Me - Retrieves the current session of the user */
const me = async (root, args, { req, next }) => {
  try {
    const currentUser = await UserModel.findById(req.session.userId);
    return currentUser;
  } catch (error) {
    return next(error);
  }
};

/* Update me - updates the current user */
const updateMe = async (root, { dataInput }, { req, next }) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.session.userId, dataInput, { runValidators: true, returnDocument: "after" });
    return updatedUser;
  } catch (error) {
    return next(error);
  }
};

// Resolvers
const userResolver = {
  Query: {
    me,
  },

  Mutation: {
    updateMe,
  },
};

export default userResolver;
