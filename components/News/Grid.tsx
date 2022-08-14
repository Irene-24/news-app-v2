import React from "react";
import { Article } from "utils/types";
import { ArticleCard } from "./ArticleCard";

interface Props {
  articles: Article[];
}

const Grid = ({ articles = [] }: Props) => {
  return (
    <section className="grid grid-cols-1 gap-3 my-2 xl:grid-cols-2 max:grid-cols-3 ">
      {articles.map((art, i) => (
        <ArticleCard
          className={i === 0 ? "xl:col-span-2 max:col-span-1" : ""}
          {...art}
          key={i}
        />
      ))}
    </section>
  );
};

export { Grid };
