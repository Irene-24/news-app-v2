import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NewsResponse } from "utils/types";
import { Category, Tags, apiKey } from "utils/constants";

interface NewsRequest {
  page?: number;
  category: Category;
}

interface SearchNewsRequest {
  page?: number;
  query: string;
}

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsdata.io/api/1/news`,
  }),
  tagTypes: [Tags.Article],
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, NewsRequest>({
      query: (arg) => {
        return {
          url: "",
          params: {
            page: arg.page ?? 0,
            category: arg.category,
            apikey: apiKey,
            language: "en",
          },
        };
      },
      providesTags: [Tags.Article],
    }),
    search: builder.query<NewsResponse, SearchNewsRequest>({
      query: (arg) => {
        return {
          url: "",
          params: {
            page: arg.page ?? 0,
            q: arg.query,
            apikey: apiKey,
            language: "en",
          },
        };
      },
      providesTags: [Tags.Article],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
