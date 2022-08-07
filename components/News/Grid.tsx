import React from "react";
import { Article } from "utils/types";
import { ArticleCard } from "./ArticleCard";

interface Props {
  articles: Article[];
}

const Grid = ({ articles = [] }: Props) => {
  return <div>Grid</div>;
};

export { Grid };
