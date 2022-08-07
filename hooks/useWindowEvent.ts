import { useEffect, useMemo } from "react";

import { debounce } from "utils/debounce";

const useWindowEvent = (
  type: keyof WindowEventMap,
  listener: (this: Window, ev: Event) => any | Function
) => {
  const eventType = useMemo<keyof WindowEventMap>(() => type, [type]);
  const debouncedListener = useMemo(() => debounce(listener), [listener]);

  useEffect(() => {
    window.addEventListener(eventType, debouncedListener);

    debouncedListener();

    return () => {
      window.removeEventListener(eventType, debouncedListener);
    };
  }, [debouncedListener, eventType]);
};

export { useWindowEvent };
