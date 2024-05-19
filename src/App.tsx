import "./App.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Shares } from "./components/Shares";
import { Footer } from "./components/Footer";
import { setState } from "./store";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Shares />
      <button
        onClick={() =>
          setState((prevStore) => {
            const newShare = {
              symbol: "XRP",
              price: 1.27472,
            };
            const share = prevStore.details.shares.find(
              (share) => share.symbol === newShare.symbol,
            );
            if (!share) {
              return {
                ...prevStore,
                details: {
                  ...prevStore.details,
                  shares: [...prevStore.details.shares, newShare],
                },
              };
            } else {
              return prevStore;
            }
          })
        }
      >
        Update Shares From App
      </button>
      <Footer />
    </div>
  );
}
export default App;
