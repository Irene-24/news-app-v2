import { useEffect, useCallback } from "react";
import { debounce } from "utils/debounce";

const useResize = (handleResize: Function) => {
  const debouncedHandleResize = useCallback(
    () => debounce(handleResize),
    [handleResize]
  );

  useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize);

    debouncedHandleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [debouncedHandleResize]);
};

export { useResize };
