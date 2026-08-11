// Models
import GameEventModel from "../models/game_event.model.js";

// Query
// ----------------------------------------------------------------
/* Retrieves a single game event */
const getGameEvent = async (root, { gameEventId }, { next }) => {
  try {
    const gameEvent = GameEventModel.findById(gameEventId);

    return gameEvent;
  } catch (error) {
    return next(error);
  }
};

// Resolvers
const userResolver = {
  Query: {
    getGameEvent,
  },
};

export default userResolver;
