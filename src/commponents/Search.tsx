import React from 'react';
import '../css/style.css';
import { IHero } from '../interfaces/Ihero';
import { useActions, useTypeSelector } from '../redux/hooks';

interface IProps {
  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void;
  searchValue: string;
}

const Search: React.FC<IProps> = (props: IProps) => {
  const { heroes } = useTypeSelector((state) => state.heroes);
  const { sortHeroes } = useActions();

  const sortByCommics = (): void => {
    const sortedHeroes: IHero[] = heroes.sort(
      (first: IHero, last: IHero) => last.comics.returned - first.comics.returned
    );
    sortHeroes(sortedHeroes);
  };

  return (
    <section className="search">
      <div className="container">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Enter the hero"
            onChange={props.onSearchChange}
            value={props.searchValue}
          />
          <a className="btn search-btn" onClick={sortByCommics}>
            Order By Number Of Comics
          </a>
        </div>
      </div>
    </section>
  );
};

export default Search;
