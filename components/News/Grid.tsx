import React from "react";
import { Article } from "utils/types";
import { ArticleCard } from "./ArticleCard";

interface Props {
  articles: Article[];
}

const Grid = ({ articles = [] }: Props) => {
  return (
    <section className="grid grid-cols-1 gap-3 my-2 sm:grid-cols-2 2xl:grid-cols-3 ">
      {articles.map((art, i) => (
        <ArticleCard key={i} />
      ))}
    </section>
  );
};

export { Grid };
