import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  tagTypes: ["Book"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `books`,
      providesTags: ["Book"],
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: `books`,
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation } =
  bookApi;
