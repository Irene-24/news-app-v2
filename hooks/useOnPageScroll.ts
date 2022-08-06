import { useEffect, useCallback } from "react";
import { debounce } from "utils/debounce";

const useOnPageScroll = (handleScroll: Function) => {
  const debouncedHandleScroll = useCallback(
    () => debounce(handleScroll),
    [handleScroll]
  );

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);
};

export { useOnPageScroll };
