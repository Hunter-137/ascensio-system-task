import { TApiData, STATUS } from "@/types/types";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<TApiData[]>([]);
  const [status, setStatus] = useState<STATUS>(STATUS.LOADING);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(STATUS.LOADING);
        const response = await fetch(url);
        const result: TApiData[] = await response.json();
        setData(result);
        setStatus(STATUS.SUCCESS);
      } catch (error) {
        console.error(error);
        setStatus(STATUS.ERROR);
      }
    };
    fetchData();
  }, [url]);

  return { data, status };
};
