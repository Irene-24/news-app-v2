import type { NextPage } from "next";
import { SEO } from "../components";
import { NewsContainer } from "@/components/News";

import { usePaginatedQuery } from "hooks";
import { newsApi } from "@/services/newsApi";
import { Categories } from "@/utils/constants";
import Heading from "@/components/Heading";

const FoodAndHealth: NextPage = () => {
  const { results, next, loading, isLast, error, refetchOnErr } =
    usePaginatedQuery(newsApi.endpoints.getNews, {
      category: Categories.health_food,
    });

  return (
    <div>
      <SEO title="Food and Health" />

      <Heading>Healthy Living</Heading>

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

export default FoodAndHealth;
