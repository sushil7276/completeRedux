// const redux = require("redux");

// import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { notesReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notoficationReducer";
import { timerReducer } from "./reducers/timerReducer";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { commentReducer } from "./reducers/commentsReducer";
import { commentApi } from "./rtk/api";

// const result = redux.combineReducers({
//   todos: todoReducer,
//   notes: notesReducer,
// });

// export const store = redux.createStore(result);

export const store = configureStore({
  reducer: {
    // "name is you specified on reducerPath" rtk api specified
    [commentApi.reducerPath]: commentApi.reducer,
    commentReducer,

    todoReducer,
    notesReducer,
    notificationReducer,
    timerReducer,
  },

  // middleware:[...getDefaultMiddleware(),loggerMiddleware]
  // getDefaultMiddleware is deprecated, use configureStore instead
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentApi.middleware, loggerMiddleware),
  // You must know RTK middleware required  eg. "commentApi.middleware"
});
