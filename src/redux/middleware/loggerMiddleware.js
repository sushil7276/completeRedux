// Create LOGGER Middleware

export const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      // Log Action in console
      console.log("[LOG]: " + action.type + " " + new Date().toString());

      // Pass action to next middleware pipeline
      next(action);

      // current OR modify state status of app
      console.log(store.getState());
    };
  };
};
