import axios, { AxiosResponse } from 'axios';

export async function http<T>(url: string): Promise<AxiosResponse> {
  const res: AxiosResponse = await axios.get<T>(url);
  try {
    return res;
  } catch (err) {
    throw new Error('Error');
  }
}
