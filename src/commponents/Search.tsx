import React from 'react';
import '../css/style.css';

interface IProps {
  searchChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Search: React.FC<IProps> = (props: IProps) => {
  return (
    <section className="search">
      <div className="container">
        <div className="search-bar">
          <input type="search" placeholder="Enter the hero" onChange={props.searchChange} />
          <a href="#" className="btn search-btn">
            Search
          </a>
        </div>
      </div>
    </section>
  );
};

export { Search };
