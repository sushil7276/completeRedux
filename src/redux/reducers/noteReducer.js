import { createSlice } from "@reduxjs/toolkit";
// import { ADD_NOTE, DELETE_NOTE, addNote } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "ncasdansd a sdnaksdjasnkd nsdnmasdnk",
      createdOn: new Date().toLocaleDateString(),
    },
    {
      text: "aaaaaaa a cscscscsc nsdnvdddvmasdnk",
      createdOn: new Date().toLocaleDateString(),
    },
  ],
};

// Redux Toolkit Reducer
const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    // Add note
    addNote: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date().toLocaleDateString(),
      });
    },
    // Delete note
    deleteNote: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const notesReducer = noteSlice.reducer;
export const notesActions = noteSlice.actions;

// Selector export
export const noteSelector = (state) => state.notesReducer.notes;

// Redux Reducer

// export const notesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, { text: action.text, createdOn: new Date() }],
//       };

//     case DELETE_NOTE:
//       return {
//         ...state,
//         notes: state.notes.filter((note, i) => i !== action.index),
//       };
//     default:
//       return state;
//   }
// };
