export type Share = {
  symbol: string;
  price: number;
};

export type Store = {
  name: string;
  age: number;
  status: string;
  details: {
    shares: Share[];
  };
};
