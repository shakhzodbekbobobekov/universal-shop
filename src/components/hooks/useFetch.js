import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOption] = useState(null);

  const postData = (postData) => {
    setOption({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const fetchReq = async (fetchOptions) => {
      setIsPending(true);
      try {
        const res = await fetch(url, { ...fetchOptions });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    if (method === "GET") {
      fetchReq();
    }

    if (method === "POST" && options) {
      fetchReq(options);
    }

    fetchReq();
  }, [url, method, options]);
  return { data, isPending, error, postData };
};
