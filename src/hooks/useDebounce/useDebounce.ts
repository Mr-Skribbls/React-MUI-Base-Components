import { useRef, useCallback } from "react";

export const useDebounce = <T, U>(delay: number, action: (value?: T) => U | Promise<U>) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounce = useCallback(
    (value?: T): Promise<U> => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      return new Promise((resolve) => {
        timeoutRef.current = setTimeout(async () => {
          const result = await action(value);
          resolve(result);
        }, delay);
      });
    },
    [delay, action]
  );

  return { debounce };
};

export default useDebounce;