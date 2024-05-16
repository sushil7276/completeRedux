import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";
import { notesActions } from "./noteReducer";
import { pauseTimer, resetTimer, startTimer } from "./timerReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = "";
    },
  },

  // Create extra Reducer using "Map Object"
  // extraReducers: {
  //   [todoActions.addTodo]: (state, action) => {
  //     state.message = "Todo Added Successfully";
  //   },
  //   [notesActions.addNote]: (state) => {
  //     state.message = "Note Added Successfully";
  //   },
  //   [notesActions.deleteNote]: (state) => {
  //     state.message = "Note Deleted Successfully";
  //   },
  //   [startTimer]: (state) => {
  //     state.message = "Timer Started.";
  //   },
  //   [pauseTimer]: (state) => {
  //     state.message = "Timer Paused.";
  //   },
  //   [resetTimer]: (state) => {
  //     state.message = "Timer set to 0.";
  //   },
  // },

  // Create extra Reducer using "builder"
  extraReducers: (builder) => {
    builder
      .addCase(todoActions.addTodo, (state, action) => {
        state.message = "Todo Added Successfully";
      })
      .addCase(notesActions.addNote, (state) => {
        state.message = "Note Added Successfully";
      })
      .addCase(notesActions.deleteNote, (state) => {
        state.message = "Note Deleted Successfully";
      })
      .addCase(startTimer, (state) => {
        state.message = "Timer Started.";
      })
      .addCase(pauseTimer, (state) => {
        state.message = "Timer Paused.";
      })
      .addCase(resetTimer, (state) => {
        state.message = "Timer set to 0.";
      })
      .addDefaultCase((state) => {
        state.message = "";
      });
  },
});

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;

// Export Selector
export const notificationSelector = (state) =>
  state.notificationReducer.message;
