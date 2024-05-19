import { useSyncExternalStore } from "react";

export function createStore<S>(initialStore: S) {
  const listeners = new Set<(store: S) => void>();
  let state = initialStore;
  let isInitialized = false;

  return {
    init: (initState: S) => {
      if (!isInitialized) {
        state = initState;
        isInitialized = true;
      }
    },
    setState(callback: (store: S) => S) {
      state = callback(state);
      listeners.forEach((listener) => listener(state));
    },
    useSelector<SelectorData>(selector: (store: S) => SelectorData): SelectorData {
      return useSyncExternalStore(
        (listener) => {
          listeners.add(listener);
          return () => listeners.delete(listener);
        },
        () => selector(state),
        () => selector(state),
      );
    },
  };
}
