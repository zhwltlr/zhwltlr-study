import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IRqQuery {
  path?: string;
  key?: string;
  reqOptions?: object;
  offset?: number;
}

const getAxios = async (args: IRqQuery) => {
  return await axios({
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: "get",
  }).catch((err) => {
    console.log(err.response.status);
  });
};

export const useRqQueryCustom = (args: IRqQuery) => {
  return useQuery([`${args.key}`], () => getAxios(args), args.reqOptions);
};
