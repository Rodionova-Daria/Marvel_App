import axios, { AxiosResponse } from 'axios';
import { IHero } from '../interfaces/Ihero';
import { IComics } from '../interfaces/Icomics';

const baseURL = 'https://gateway.marvel.com';

async function getHeroes(offset: number, limit: number, name?: string): Promise<AxiosResponse> {
  const url = `${baseURL}:443/v1/public/characters?`;
  let params = {};
  if (name) {
    params = {
      nameStartsWith: name,
      apikey: process.env.REACT_APP_API_KEY,
    };
  } else {
    params = {
      limit: limit,
      offset: offset,
      apikey: process.env.REACT_APP_API_KEY,
    };
  }
  const res: AxiosResponse = await axios.get<IHero[]>(url, { params });
  try {
    return res;
  } catch (err) {
    throw new Error('Error in request at getHeroes function');
  }
}

async function getComics(id: string): Promise<AxiosResponse> {
  const url = `${baseURL}:443/v1/public/characters/${id}/comics`;
  const params = {
    apikey: process.env.REACT_APP_API_KEY,
  };
  const res: AxiosResponse = await axios.get<IComics[]>(url, { params });
  try {
    return res;
  } catch (err) {
    throw new Error('Error in request at getCommics function');
  }
}

export { getHeroes, getComics };
