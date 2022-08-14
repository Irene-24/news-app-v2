import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

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

const defaultConfig = {
  apikey: apiKey,
  language: "en",
};

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsdata.io/api/1`,
    //trailing slash issue was breaking endpoint
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [Tags.Article],
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, NewsRequest>({
      query: (arg) => {
        return {
          url: "/news",
          params: {
            page: arg.page ?? 0,
            category: arg.category,
            ...defaultConfig,
          },
        };
      },
      providesTags: [Tags.Article],
    }),
    search: builder.query<NewsResponse, SearchNewsRequest>({
      query: (arg) => {
        return {
          url: "/news",
          params: {
            page: arg.page ?? 0,
            q: arg.query,
            ...defaultConfig,
          },
        };
      },
      providesTags: [Tags.Article],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
