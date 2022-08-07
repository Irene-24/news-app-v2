import type { NextPage } from "next";
import Link from "next/link";

import { increment } from "redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { DisplayErrorMessage, DisplayErrorWithChildren, SEO } from "components";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  return (
    <div>
      <SEO />
      Home Page
      <br />
      Counter value = {value}
      <br />
      <button onClick={() => dispatch(increment())}>Press</button>
      <br />
      <Link href="/counter">
        <a>Counter</a>
      </Link>
      <DisplayErrorMessage
        onDismiss={() => console.log("dismiss")}
        retry={() => console.log("retry")}
      />
      <DisplayErrorWithChildren
        onDismiss={() => console.log("dismiss")}
        retry={() => console.log("retry")}
      >
        <p>Testing</p>
      </DisplayErrorWithChildren>
    </div>
  );
};

export default Home;
