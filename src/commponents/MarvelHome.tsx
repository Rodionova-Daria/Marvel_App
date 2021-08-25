import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { HeroList } from './HeroList';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useActions, useTypeSelector } from '../redux/hooks';
import { ErrorHandler } from './ErrorHandler';
import Paginations from './Paginations';
import Search from './Search';
import '../css/style.css';

type IProps = RouteComponentProps<{ location: string }>;

const MarvelHome: React.FC<IProps> = (props: IProps) => {
  const { heroes, loading, error } = useTypeSelector((state) => state.heroes);
  const { fetchHero } = useActions();
  const history = useHistory();
  const [searchField, setSearchField] = useState<string>('');
  const [heroesPerPage] = useState<number>(8);

  useEffect(() => {
    fetchHero(0, heroesPerPage);
  }, []);

  useEffect(() => {
    !searchField ? history.push('') : history.push(`?name=${searchField}`);
  }, [searchField]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.value;
    setSearchField(name);
    if (name) {
      fetchHero(0, heroesPerPage, name);
    } else {
      fetchHero(0, heroesPerPage);
    }
  };

  const paginationHandleChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    const offset = heroesPerPage * page - heroesPerPage;
    fetchHero(offset, heroesPerPage);
  };

  const errorHandlerHeroes = () => {
    if (!loading && !error) {
      return (
        <>
          <HeroList heroes={heroes} />
        </>
      );
    } else if (error) {
      const errorText = 'Error  in heroes request. Try again later';
      return <ErrorHandler errorText={errorText} />;
    } else {
      return (
        <div className="spiner">
          <Backdrop open invisible={true}>
            <CircularProgress color="secondary" />
          </Backdrop>
        </div>
      );
    }
  };

  return (
    <div>
      <Header />
      <Search onSearchChange={onSearchChange} />
      {errorHandlerHeroes()}
      <Paginations handleChange={paginationHandleChange} searchField={searchField} />;
    </div>
  );
};

export default MarvelHome;
