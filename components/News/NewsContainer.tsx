import React, { MouseEventHandler } from "react";
import { Article } from "utils/types";
import { Bars, Cube } from "../Loaders";
import { Grid } from "./Grid";

interface NewsContainerProps {
  articles: Article[];
  loadArticles: Function;
  loading?: boolean;
  error?: any;
  isLast: boolean;
}

const NewsContainer = ({
  articles = [],
  loadArticles,
  loading = true,
  error = null,
  isLast = true,
}: NewsContainerProps) => {
  const onClick = () => {
    loadArticles();
  };

  return (
    <div>
      {loading && !articles.length ? <Cube /> : null}

      {articles.length ? (
        <Grid articles={articles} />
      ) : (
        <h1 className="px-2 my-2 text-base font-semibold text-center md:text-xl">
          No data
        </h1>
      )}

      {!isLast && articles.length && !loading ? (
        <div className="flex items-center justify-center my-20 ">
          <button
            className="px-5 py-2.5 text-brand-blue-dark rounded border border-brand-blue-dark"
            onClick={onClick}
          >
            Show more
          </button>
        </div>
      ) : null}

      {loading && articles.length ? <Bars /> : null}
    </div>
  );
};

export { NewsContainer };
