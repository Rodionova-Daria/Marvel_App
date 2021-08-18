import React from 'react';
import '../css/style.css';

interface IProps {
  searchChange: React.ChangeEventHandler<HTMLInputElement>;
  sortCommics(): void;
}

export const Search: React.FC<IProps> = ({ searchChange, sortCommics }: IProps) => {
  return (
    <section className="search">
      <div className="container">
        <div className="search-bar">
          <input type="search" placeholder="Enter the hero" onChange={searchChange} />
          <a className="btn search-btn" onClick={sortCommics}>
            Order By Number Of Commics
          </a>
        </div>
      </div>
    </section>
  );
};
