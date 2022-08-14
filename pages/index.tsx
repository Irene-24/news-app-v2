import type { NextPage } from "next";
import Link from "next/link";

import { increment } from "redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { DisplayErrorMessage, DisplayErrorWithChildren, SEO } from "components";
import Fade from "@/components/Fade";
import { useState } from "react";
import { NewsContainer } from "@/components/News";

import data from "../utils/dummyData/news.json";
import { Article } from "@/utils/types";

const articlesData = data.results as Article[];

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  const [show, setShow] = useState(true);
  const [articles, setArticles] = useState<Article[]>(articlesData.slice(0, 6));
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const list = [
        ...articles,
        ...articlesData.slice(articles.length, articles.length + 6),
      ];

      setArticles(list);
      setLoading(false);
    }, 1500);
  };

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
      <Fade isShowing={show}>
        <DisplayErrorMessage
          onDismiss={() => setShow(false)}
          retry={() => console.log("retry")}
        />
      </Fade>
      <DisplayErrorWithChildren
        onDismiss={() => console.log("dismiss")}
        retry={() => console.log("retry")}
      >
        <p>Testing</p>
      </DisplayErrorWithChildren>
      <NewsContainer
        isLast={articles.length >= articlesData.length}
        articles={articles}
        loadArticles={loadMore}
        loading={loading}
      />
    </div>
  );
};

export default Home;
