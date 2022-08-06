import { QueryDefinition } from "@reduxjs/toolkit/dist/query";
import { QueryHooks } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { useState, useCallback, useEffect, useMemo } from "react";

interface PaginationProps {
  [key: string | number]: any;
}

const getPageKey = (currentPage: number, index: number) => {
  if (index === 0) {
    return currentPage - 1;
  } else if (index === 1) {
    return currentPage;
  }
  return currentPage + 1;
};

function usePaginatedQuery<
  Endpoint extends QueryHooks<QueryDefinition<any, any, any, any, any>>
>(endpoint: Endpoint, options?: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [results, setResults] = useState(new Map());
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<any>(null);

  const next = useCallback(
    () => setCurrentPage((currentPage) => currentPage + 1),
    []
  );

  const prev = useCallback(
    () => setCurrentPage((currentPage) => currentPage - 1),
    []
  );

  const reset = useCallback(() => {
    setCurrentPage(0);
    setResults(new Map());
  }, []);

  const lastResult = endpoint.useQuery(
    { ...options, page: currentPage - 1 },
    { skip: currentPage <= 0 }
  );
  const currentResult = endpoint.useQuery({ ...options, page: currentPage });
  const nextResult = endpoint.useQuery({ ...options, page: currentPage + 1 });

  useEffect(() => {
    setLoading(
      lastResult.isLoading || nextResult.isLoading || currentResult.isLoading
    );
  }, [lastResult.isLoading, nextResult.isLoading, currentResult.isLoading]);

  useEffect(() => {
    setError(
      lastResult.error ?? nextResult.error ?? currentResult.error ?? null
    );
  }, [lastResult.error, nextResult.error, currentResult.error]);

  const newResult = useMemo(() => {
    const values = new Map();
    const allResults = [lastResult.data, currentResult.data, nextResult.data];

    allResults.forEach((res, index) => {
      if (res.data.nextPage) {
        values.set(getPageKey(currentPage, index), res.data.results);
      }
    });

    return values;
  }, [currentPage, lastResult.data, currentResult.data, nextResult.data]);

  useEffect(() => {
    setResults((results) => {
      const result = new Map(results);
      const newKeys = newResult.keys();

      // @ts-ignore
      [...newKeys].forEach((k) => result.set(k, newResult.get(k)));
      return result;
    });
  }, [newResult]);

  return {
    loading,
    reset,
    currentPage,
    next,
    prev,
    error,

    // @ts-ignore
    results: [].concat.apply([], [...results.values()]),
    isLast: results.size === currentResult?.data?.totalResults,
  };
}

export { usePaginatedQuery };
