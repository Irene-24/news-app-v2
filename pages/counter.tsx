import type { NextPage } from "next";
import Link from "next/link";
import { increment } from "redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Counter: NextPage = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  return (
    <p>
      Counter page
      <br />
      Counter value = {value}
      <br />
      <button onClick={() => dispatch(increment())}>Press</button>
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
    </p>
  );
};

export default Counter;
