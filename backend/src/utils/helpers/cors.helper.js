/* Cors Options */
export const corsOptions = {
  credentials: true,
  maxAge: 2592000,
  origin: process.env.APP_ENVIRONMENT === "local" && [
    "http://localhost:3000",
    "https://studio.apollographql.com",
  ],
};

export default {
  corsOptions,
};
