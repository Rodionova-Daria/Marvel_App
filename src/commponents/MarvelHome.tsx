import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { HeroList } from './HeroList';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { RouteComponentProps, useHistory, useLocation } from 'react-router-dom';
import { useActions, useTypeSelector } from '../redux/hooks';
import { ErrorHandler } from './ErrorHandler';
import Paginations from './Paginations';
import Search from './Search';
import '../css/style.css';
import * as queryString from 'querystring';

type IProps = RouteComponentProps<{ location: string }>;

const MarvelHome: React.FC<IProps> = (props: IProps) => {
  const { heroes, loading, error } = useTypeSelector((state) => state.heroes);
  const { fetchHero } = useActions();
  const history = useHistory();
  const location = useLocation();
  const [heroesPerPage] = useState<number>(8);
  const parser = queryString.parse(history.location.search.substr(1));
  const actualName = parser.name;

  useEffect(() => {
    fetchHero(0, heroesPerPage, actualName || null);
  }, []);

  useEffect(() => {
    if (history.action === 'POP' || location.pathname === '/') {
      fetchHero(0, heroesPerPage, actualName || null);
    }
  }, [location]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.value;
    if (name) {
      history.push(`/?name=${name}`);
      fetchHero(0, heroesPerPage, name);
    } else {
      history.push('');
      fetchHero(0, heroesPerPage, null);
    }
  };

  const paginationHandleChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    const offset = heroesPerPage * page - heroesPerPage;
    fetchHero(offset, heroesPerPage, null);
  };

  const errorHandlerHeroes = () => {
    if (error) {
      return <ErrorHandler errorText={error} />;
    }
    if (loading) {
      return (
        <div className="spiner">
          <Backdrop open invisible={true}>
            <CircularProgress color="secondary" />
          </Backdrop>
        </div>
      );
    }
    return <HeroList heroes={heroes} />;
  };

  return (
    <div>
      <Header />
      <Search onSearchChange={onSearchChange} searchValue={actualName || ''} />
      {errorHandlerHeroes()}
      <Paginations handleChange={paginationHandleChange} searchField={actualName || ''} />;
    </div>
  );
};

export default MarvelHome;
