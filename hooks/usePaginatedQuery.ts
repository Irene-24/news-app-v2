import { QueryDefinition } from "@reduxjs/toolkit/dist/query";
import { QueryHooks } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { useState, useCallback, useEffect, useMemo } from "react";

interface PaginationProps {
  [key: string | number]: any;
}

const getPageKey = (currentPage: number, index: number) => {
  if (index === 0) {
    return currentPage <= 0 ? 0 : currentPage - 1;
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

  const refetchOnErr = () => {
    if (lastResult.error) {
      lastResult.refetch();
    }

    if (currentResult.error) {
      currentResult.refetch();
    }

    if (nextResult.error) {
      nextResult.refetch();
    }
  };

  useEffect(() => {
    setLoading(
      lastResult.isFetching || nextResult.isFetching || currentResult.isFetching
    );
  }, [lastResult.isFetching, nextResult.isFetching, currentResult.isFetching]);

  useEffect(() => {
    setError(
      lastResult.error ?? nextResult.error ?? currentResult.error ?? null
    );
  }, [lastResult.error, nextResult.error, currentResult.error]);

  const newResult = useMemo(() => {
    const values = new Map();

    const allResults = [
      lastResult?.data,
      currentResult?.data,
      nextResult?.data,
    ];

    /*
     Makes the assumptions that the array of items   
     is locatated in the "results" field
     
     Consider passing an accessor function for more flexibilty
     */
    allResults.forEach((res, index) => {
      if (res?.data?.results.length) {
        values.set(getPageKey(currentPage, index), res.data.results);
      }
    });

    return values;
  }, [currentPage, lastResult?.data, currentResult?.data, nextResult?.data]);

  useEffect(() => {
    setResults((results) => {
      const result = new Map(results);

      Array.from(newResult.keys()).forEach((k) =>
        result.set(k, newResult.get(k))
      );
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
    refetchOnErr,
    results: [].concat.apply([], Array.from(results.values())),
    isLast: results.size === currentResult?.data?.totalResults,
  };
}

export { usePaginatedQuery };
