import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { SEO } from "../components";

import { usePaginatedQuery } from "hooks";
import { NewsContainer } from "@/components/News";
import Heading from "@/components/Heading";
import { newsApi } from "@/services/newsApi";

interface Props {
  q: string;
}

const LoadedParams = ({ q = "" }: Props) => {
  const { results, next, loading, isLast, error, refetchOnErr } =
    usePaginatedQuery(newsApi.endpoints.search, {
      query: q,
    });

  return (
    <div>
      <Heading>
        Results for{" "}
        <i>
          <q>{q}</q>
        </i>
      </Heading>

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

const Search: NextPage = () => {
  const router = useRouter();
  const q = (router?.query?.q as string) || "";

  return (
    <div>
      <SEO title={`Search`} />

      {q ? (
        <LoadedParams q={q} />
      ) : (
        <Heading>
          <i>
            <q>Loading...</q>
          </i>
        </Heading>
      )}
    </div>
  );
};

export default Search;
