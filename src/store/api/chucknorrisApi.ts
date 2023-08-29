import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../constants";
import { IChucknorrisSearch } from "../../types/IChucknorrisSearch";

export const chucknorrisApi = createApi({
  reducerPath: "chucknorrisApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    getChucknorrisSearch: builder.query<IChucknorrisSearch, string>({
      query: query => `/search?query=${query}`,
    }),
  }),
});

export const { useGetChucknorrisSearchQuery } = chucknorrisApi;
