import { createStore } from "./createStore";
import { Store } from "../types";

const store = createStore<Store>({
  name: "John",
  age: 30,
  status: "active",
  details: {
    shares: [
      {
        symbol: "AAPL",
        price: 100,
      },
      {
        symbol: "MSFT",
        price: 200,
      },
      {
        symbol: "GOOG",
        price: 300,
      },
    ],
  },
});

export const { setState, useSelector } = store;
