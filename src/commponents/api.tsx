import axios, { AxiosResponse } from 'axios';
import { IHero } from '../interfaces/Ihero';
import { IComics } from '../interfaces/Icomics';

const baseURL = 'https://gateway.marvel.com';
const params = {
  apikey: process.env.REACT_APP_API_KEY,
};

async function getHeroes(searchProps: string): Promise<AxiosResponse> {
  const url = `${baseURL}:443/v1/public/characters?limit=40${searchProps}`;
  const res: AxiosResponse = await axios.get<IHero[]>(url, { params });
  try {
    return res;
  } catch (err) {
    throw new Error('Error in request at getHeroes function');
  }
}

async function getComics(id: string): Promise<AxiosResponse> {
  const url = `${baseURL}:443/v1/public/characters/${id}/comics`;
  const res: AxiosResponse = await axios.get<IComics[]>(url, { params });
  try {
    return res;
  } catch (err) {
    throw new Error('Error in request at getCommics function');
  }
}

export { getHeroes, getComics };
