import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';

interface IProps {
  searchChange: React.ChangeEventHandler<HTMLInputElement>;
  searchField: string;
}

const Search: React.FC<IProps> = (props: IProps) => {
  return (
    <section className="search">
      <div className="container">
        <div className="search-bar">
          <input type="search" placeholder="Enter the hero" onChange={props.searchChange} />
          <Link to={`/?name=${props.searchField}`} className="link">
            <a href="#" className="btn search-btn">
              Search
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Search };
