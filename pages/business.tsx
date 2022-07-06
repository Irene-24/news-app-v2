import type { NextPage } from "next";
import Link from "next/link";

import { increment } from "redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SEO } from "../components";

const Business: NextPage = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  return (
    <p>
      <SEO title="Business" />
      Home Page
      <br />
      Counter value = {value}
      <br />
      <button onClick={() => dispatch(increment())}>Press</button>
      <br />
      <Link href="/counter">
        <a>Counter</a>
      </Link>
    </p>
  );
};

export default Business;
