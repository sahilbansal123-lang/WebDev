import { createContext } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  return <CounterContext.Provider>{props.children}</CounterContext.Provider>;
};
