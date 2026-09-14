// Sets the default values for user update form
export const setUpdateUserValues = user => ({
  first_name: user.first_name,
  last_name: user.last_name,
  email: user.email,
});
