import type { NextPage } from "next";
import { SEO } from "../components";
import { NewsContainer } from "@/components/News";
import Heading from "@/components/Heading";

import { usePaginatedQuery } from "hooks";
import { newsApi } from "@/services/newsApi";
import { Categories } from "@/utils/constants";

const Home: NextPage = () => {
  const { results, next, loading, isLast, error, refetchOnErr } =
    usePaginatedQuery(newsApi.endpoints.getNews, {
      category: Categories.headlines,
    });

  return (
    <div>
      <SEO />

      <Heading>Top Stories</Heading>

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

export default Home;
