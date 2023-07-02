import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface IRqMutator {
  path?: string;
  key: string;
  bodyContent: object;
  headers?: object;
}

const postAxios = async (args: IRqMutator) => {
  return await axios({
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: "post",
    data: args.bodyContent,
  }).catch((err) => {
    console.log(err.response.status);
  });
};

export const useRqMutateCustom = () => {
  return useMutation(postAxios);
};
