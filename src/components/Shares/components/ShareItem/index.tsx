import React from "react";

export const ShareItem = React.memo(
  ({
    symbol,
    price,
    onUpdate,
  }: {
    symbol: string;
    price: number;
    onUpdate: (symbol: string) => void;
  }) => {
    console.log(`ShareItem ${symbol} updated`);

    return (
      <li key={price + symbol}>
        <p>
          {symbol} : {price}
        </p>
        <button
          type="button"
          onClick={() => {
            onUpdate(symbol);
          }}
        >
          Increase
        </button>
      </li>
    );
  },
);
