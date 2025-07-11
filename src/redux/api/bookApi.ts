import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  tagTypes: ["Book"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-server-beryl-zeta.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `books`,
      providesTags: ["Book"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
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
    updateBook: builder.mutation({
      query: ({ id, ...updatedBook }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: updatedBook,
      }),
      invalidatesTags: ["Book"],
    }),
    borrowSummary: builder.query({
      query: () => `borrow`,
      providesTags: ["Book"],
    }),
    borrowBook: builder.mutation({
      query: (body) => ({
        url: `borrow`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useBorrowSummaryQuery,
  useBorrowBookMutation,
} = bookApi;
