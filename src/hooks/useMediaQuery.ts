import { NoSerialize, useSignal, useTask$ } from "@builder.io/qwik";

const useMediaQuery = (query: NoSerialize<() => string>) => {
  const match = useSignal(false);
  useTask$(({ track }) => {
    if (typeof window === "undefined") return;
    let _query: string = "";
    track(() => {
      _query = (query && query()) || "";
    });
    const _match = window.matchMedia(_query);
    const listener = () => {
      match.value = _match.matches;
    };
    _match.addEventListener("change", listener);
    listener();
    return () => _match.removeEventListener("change", listener);
  });

  return match;
};

export default useMediaQuery;
