import React, { MouseEventHandler } from "react";
import { Article } from "utils/types";
import { DisplayErrorWithChildren } from "../DisplayError";
import Fade from "../Fade";
import { Bars, Cube } from "../Loaders";
import { Grid } from "./Grid";

interface NewsContainerProps {
  articles: Article[];
  loadArticles: Function;
  loading?: boolean;
  error?: string | Record<string, any> | null | undefined;
  isLast: boolean;
  retryLoadingArticles?: Function;
}

const isEmpty = (value: any) => {
  if (!value) return true;
  return Object.keys(value).length === 0;
};

const NewsContainer = ({
  articles = [],
  loadArticles,
  retryLoadingArticles,
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
        <>
          {error ? null : (
            <>
              {!loading ? (
                <h1 className="px-2 my-2 text-base font-semibold text-center md:text-xl">
                  No data
                </h1>
              ) : null}
            </>
          )}
        </>
      )}

      {!isLast && isEmpty(error) && articles.length && !loading ? (
        <div className="flex items-center justify-center my-20 ">
          <button
            className="px-5 py-2.5 text-brand-blue-dark rounded border border-brand-blue-dark"
            onClick={onClick}
          >
            Show more
          </button>
        </div>
      ) : null}

      {error && !loading ? (
        <Fade isShowing={!!error}>
          <DisplayErrorWithChildren retry={retryLoadingArticles}>
            <div className="relative">
              <pre>
                <code>{JSON.stringify(error, undefined, 2)}</code>
              </pre>
            </div>
          </DisplayErrorWithChildren>
        </Fade>
      ) : null}

      {loading && articles.length ? <Bars /> : null}
    </div>
  );
};

export { NewsContainer };
