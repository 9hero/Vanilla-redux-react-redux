import defaultAxios from "axios";
import { useEffect, useState } from "react";
export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  // if (!opts.url) {
  //   return;
  // }
  useEffect(() => {
    axiosInstance(opts)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          data: response.data,
        });
        console.log("응답:", response);
        console.log("데이터:", response.data);
      })
      .catch((e) => {
        setState({
          ...state,
          loading: false,
          error: e,
        });
      });
  }, []);
  return state;
};
