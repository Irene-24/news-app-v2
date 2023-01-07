//@ts-nocheck

import { rest } from "msw";

import news from "@/utils/dummyData/news.json";

const urlRegex = /newsdata\.io\/api\/1\/news/;
const TOTAL = 50;

const calcNextPage = (page: number) => {
  if (!page || page <= 0) {
    return 1;
  }

  const maxPageIndex = TOTAL / 10 - 1;

  if (page === maxPageIndex) {
    return null;
  }

  const possibleNext = Math.min(Math.max(page + 1, 1), maxPageIndex);
  return possibleNext;
};

export const newsHandlers = [
  rest.get(urlRegex, (req, res, ctx) => {
    const page = req.url.searchParams.get("page");

    return res(
      ctx.status(200),
      ctx.json({
        ...news,
        nextPage: calcNextPage(+page),
        totalResults: TOTAL,
      })
    );
  }),
];
