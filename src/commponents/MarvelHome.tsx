import React, { useEffect, useState } from 'react';
import { IHero } from '../interfaces/Ihero';
import { Header } from './Header';
import Search from './Search';
import { HeroList } from './HeroList';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import Paginations from './Paginations';
import { useActions, useTypeSelector } from '../redux/hooks';

type IProps = RouteComponentProps<{ location: string }>;

const MarvelHome: React.FC<IProps> = (props: IProps) => {
  const { fetchHeroes, loading } = useTypeSelector((state) => state.heroes);
  const { fetchHeroSaga } = useActions();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchField, setsearchField] = useState<string>('');
  const [heroesPerPage] = useState<number>(4);

  useEffect(() => {
    fetchHeroSaga(props.location.search);
  }, []);

  useEffect(() => {
    !searchField ? history.push('') : history.push(`?name=${searchField}`);
  }, [searchField]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setsearchField(e.target.value);
  };

  const searchHeroes = (posts: IHero[]): IHero[] => {
    const search = searchField.toLowerCase();
    return posts.filter((hero) => hero.name.toLowerCase().includes(search));
  };

  const paginationHandleChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    setCurrentPage(page);
  };

  const checkOnPosts = (currentPosts: IHero[]): IHero[] => {
    if (searchField === '') {
      return searchHeroes(currentPosts);
    } else {
      return searchHeroes(fetchHeroes);
    }
  };

  const indexOfLastPost = currentPage * heroesPerPage;
  const indexOfFirstPost = indexOfLastPost - heroesPerPage;
  const currentPosts = fetchHeroes.slice(indexOfFirstPost, indexOfLastPost);
  const filterHeroes = checkOnPosts(currentPosts);

  return (
    <div>
      <Header />
      {!loading ? (
        <>
          <Search onSearchChange={onSearchChange} />
          <HeroList heroes={filterHeroes} />
          <Paginations
            heroesPerPage={heroesPerPage}
            totalPosts={fetchHeroes.length}
            handleChange={paginationHandleChange}
          />
        </>
      ) : (
        <Backdrop open invisible={true}>
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
    </div>
  );
};

export default MarvelHome;
