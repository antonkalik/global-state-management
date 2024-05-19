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
            const newShare = { symbol: "XRP", price: 1.27472 };
            const shareExists = prevStore.details.shares.some(
              (share) => share.symbol === newShare.symbol,
            );
            return shareExists
              ? prevStore
              : {
                  ...prevStore,
                  details: {
                    ...prevStore.details,
                    shares: [...prevStore.details.shares, newShare],
                  },
                };
          })
        }
      >
        Add Share From App Component
      </button>
      <Footer />
    </div>
  );
}

export default App;
