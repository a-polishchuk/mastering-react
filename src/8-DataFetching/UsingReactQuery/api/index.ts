import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export async function queryFunction({ queryKey }: QueryFunctionContext) {
  const url = queryKey[0] as string;
  const { data } = await axiosInstance.get(url);
  return data;
}
