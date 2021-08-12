import React from 'react';
import '../css/style.css';

interface IProps {
  searchChange: React.ChangeEventHandler<HTMLInputElement>;
  OrderButton(): void;
}

export const Search: React.FC<IProps> = ({ searchChange, OrderButton }: IProps) => {
  return (
    <section className="search">
      <div className="container">
        <div className="search-bar">
          <input type="search" placeholder="Enter the hero" onChange={searchChange} />
          <a className="btn search-btn" onClick={OrderButton}>
            Order By Number Of Commics
          </a>
        </div>
      </div>
    </section>
  );
};
