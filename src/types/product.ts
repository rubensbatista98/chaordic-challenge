export type Product = {
  id: string;
  image: string;
  name: string;
  description: string;
  oldPrice: string;
  price: string;
  installments: {
    count: number;
    value: string;
  };
};
