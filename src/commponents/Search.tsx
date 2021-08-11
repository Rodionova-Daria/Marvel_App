import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';

interface IProps {
  searchChange: React.ChangeEventHandler<HTMLInputElement>;
  searchField: string;
}

export const Search: React.FC<IProps> = (props: IProps) => {
  const path = `/?name=${props.searchField}`;
  return (
    <section className="search">
      <div className="container">
        <div className="search-bar">
          <input type="search" placeholder="Enter the hero" onChange={props.searchChange} />
          <Link to={path} className="btn search-btn">
            Search
          </Link>
        </div>
      </div>
    </section>
  );
};
