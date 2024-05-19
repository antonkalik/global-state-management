import { useCallback } from "react";
import { ShareItem } from "./components/ShareItem";
import { setState, useSelector } from "../../store";

export const Shares = () => {
  const { shares } = useSelector((state) => state.details);

  console.log("Shares List updated");

  const updateShare = useCallback((symbol: string) => {
    setState((prevStore) => {
      return {
        ...prevStore,
        details: {
          ...prevStore.details,
          shares: prevStore.details.shares.map((share) => {
            if (share.symbol === symbol) {
              return {
                ...share,
                price: share.price + 1,
              };
            } else {
              return share;
            }
          }),
        },
      };
    });
  }, []);

  return (
    <div className="shares">
      <h1>Shares</h1>
      <ul>
        {shares.map(({ symbol, price }, index) => {
          return (
            <ShareItem
              key={symbol + index}
              onUpdate={updateShare}
              symbol={symbol}
              price={price}
            />
          );
        })}
      </ul>
    </div>
  );
};
