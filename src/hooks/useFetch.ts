import { STATUS } from "@/types/types";
import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<STATUS>(STATUS.LOADING);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATUS.LOADING);
      setData(null);

      try {
        const response = await fetch(url);
        const result: T = await response.json();
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
