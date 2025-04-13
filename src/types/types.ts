export type TApiData = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export enum STATUS {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
