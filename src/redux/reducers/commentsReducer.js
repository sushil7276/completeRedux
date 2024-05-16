import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// using thunk for async actions
// export const getComment = createAsyncThunk(
//   "comment/getInitialComment",
//   async (arg, thunkApi) => {
//     try {
//       // Set Loading TRUE
//       thunkApi.dispatch(commentAction.getCommentsRequest());

//       // fetch comments from the api
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/comments"
//       );

//       thunkApi.dispatch(commentAction.getCommentsSuccess(data));
//     } catch (e) {
//       thunkApi.dispatch(
//         commentAction.getCommentsFailure("failed to fetch comments")
//       );
//     }
//   }
// );

export const getComment = createAsyncThunk("comments/getComment", () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
});

const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentSlice = createSlice({
  name: "comment",
  initialState: INITIAL_STATE,
  reducers: {
    // getCommentsRequest(state) {
    //   state.isLoading = true;
    // },
    // getCommentsSuccess(state, action) {
    //   state.isLoading = false;
    //   state.comments = action.payload;
    // },
    // getCommentsFailure(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = [...action.payload.data];
      })
      .addCase(getComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "failed to fetch comments";
      });
  },
});

// export the comments reducer function and action creators here

export const commentReducer = commentSlice.reducer;
export const commentAction = commentSlice.actions;

// export the comments selector function here
export const commentSelector = (state) => state.commentReducer;
