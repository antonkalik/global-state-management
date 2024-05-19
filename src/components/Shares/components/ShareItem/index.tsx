import React from "react";

type ShareItemProps = {
    symbol: string;
    price: number;
    onUpdate: (symbol: string) => void;
}

export const ShareItem = React.memo(({ symbol, price, onUpdate }: ShareItemProps) => {
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
});
