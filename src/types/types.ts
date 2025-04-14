export type TApiData = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export enum STATUS {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
