// const redux = require("redux");

// import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { notesReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notoficationReducer";
import { timerReducer } from "./reducers/timerReducer";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { commentReducer } from "./reducers/commentsReducer";

// const result = redux.combineReducers({
//   todos: todoReducer,
//   notes: notesReducer,
// });

// export const store = redux.createStore(result);

export const store = configureStore({
  reducer: {
    todoReducer,
    notesReducer,
    notificationReducer,
    timerReducer,
    commentReducer,
  },

  // middleware:[...getDefaultMiddleware(),loggerMiddleware]
  // getDefaultMiddleware is deprecated, use configureStore instead
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
