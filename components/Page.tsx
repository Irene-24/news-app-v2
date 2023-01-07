import { ReactNode } from "react";

import { usePaginatedQuery } from "hooks";

import { SEO } from "../components";
import { NewsContainer } from "@/components/News";

import Heading from "@/components/Heading";
import { Categories } from "@/utils/constants";
import { newsApi } from "@/services/newsApi";

interface Props {
  pageTitle: ReactNode;
  seoTitle: string;
  category: Categories;
}

const Page = ({
  pageTitle = "Page Title",
  seoTitle = "News App",
  category = Categories.headlines,
}: Props) => {
  const { results, next, loading, isLast, error, refetchOnErr } =
    usePaginatedQuery(newsApi.endpoints.getNews, {
      category,
    });

  return (
    <div>
      <SEO title={seoTitle} />

      <Heading>{pageTitle}</Heading>

      <NewsContainer
        isLast={isLast}
        articles={results}
        loadArticles={next}
        loading={loading}
        error={error}
        retryLoadingArticles={refetchOnErr}
      />
    </div>
  );
};

export default Page;
