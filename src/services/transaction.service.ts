import { apiSlice } from "./base-query";

export const transactionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkAvailability: builder.mutation({
      query: (payload) => ({
        url: "/transaction/is-available",
        method: "POST",
        body: payload,
      }),
    }),
    transaction: builder.mutation({
      query: (payload) => ({
        url: "/transaction",
        method: "POST",
        body: payload,
      }),
    }),
    getDetailTransactions: builder.query({
      query: (id) => ({
        url: `/transaction/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCheckAvailabilityMutation,
  useTransactionMutation,
  useGetDetailTransactionsQuery,
} = transactionApi;
