import axios, { AxiosResponse } from 'axios';
import { IHero } from '../interfaces/Ihero';
import { ICommics } from '../interfaces/Icommics';

const baseURL = 'https://gateway.marvel.com';

async function getHeroes(searchProps: string): Promise<AxiosResponse> {
  const search = searchProps || '?';
  const url = `${baseURL}:443/v1/public/characters${search}&apikey=${process.env.REACT_APP_API_KEY}`;
  const res: AxiosResponse = await axios.get<IHero[]>(url);
  try {
    return res;
  } catch (err) {
    throw new Error('Error in request at getHeroes function');
  }
}

async function getCommics(id: string): Promise<AxiosResponse> {
  const url = `${baseURL}:443/v1/public/characters/${id}/comics?apikey=${process.env.REACT_APP_API_KEY}`;
  const res: AxiosResponse = await axios.get<ICommics[]>(url);
  try {
    return res;
  } catch (err) {
    throw new Error('Error in request at getCommics function');
  }
}

export { getHeroes, getCommics };
