import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Tags } from "utils/constants";

interface Joke {
  id: number | string;
  setup: string;
  delivery: string;
}

interface JokesResponse {
  error: boolean;
  message?: string;
  amount: number;
  jokes: Joke[];
}

export const jokesApi = createApi({
  reducerPath: "jokesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v2.jokeapi.dev/joke",
  }),
  tagTypes: [Tags.Joke],
  endpoints: (builder) => ({
    getJokes: builder.query<JokesResponse, void>({
      query: () =>
        "/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10&safe-mode&type=twopart",
    }),
  }),
});
