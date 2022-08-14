import type { NextPage } from "next";
import Link from "next/link";

import { increment } from "redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SEO } from "../components";
import { usePaginatedQuery } from "hooks";
import { newsApi } from "redux/apiSlices/newsApi";
import { Categories } from "@/utils/constants";

const Business: NextPage = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  const { results, next, loading, isLast } = usePaginatedQuery(
    newsApi.endpoints.getNews,
    {
      category: Categories.business,
    }
  );

  return (
    <div>
      <SEO title="Business" />
      Business Page
      <br />
      Counter value = {value}
      <br />
      <button onClick={() => dispatch(increment())}>Press</button>
      <br />
      <Link href="/counter">
        <a>Counter</a>
      </Link>
    </div>
  );
};

export default Business;
