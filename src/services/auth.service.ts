import { apiSlice } from "./base-query";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // mutation digunakan untuk sesuatu yang melempar data atau post
    // query digunakan untuk get
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
