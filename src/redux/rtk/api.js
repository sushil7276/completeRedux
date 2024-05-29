import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCommentUrl } from "../reducers/commentsReducer";

export const commentApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: getCommentUrl }),

  // tagType specified because if you send post request then after post request again get request is done automatically
  tagTypes: ["Comment"],

  endpoints: (builder) => ({
    // ".query" is use from only get request
    getCommentApi: builder.query({
      query: () => "comments",
      providesTags: ["Comment"],
    }),

    // ".mutation" is use from other request --- method specified required
    newCommentApi: builder.mutation({
      query: (comment) => ({
        url: "comment",
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

// this "useGetCommentQuery || useNewCommentMutation" hook is created from endpoints name
export const { useGetCommentApiQuery, useNewCommentApiMutation } = commentApi;

