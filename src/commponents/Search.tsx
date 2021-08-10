import React from 'react';
import '../css/style.css';

const Search: React.FC = () => {
  return (
    <section className="search">
      <div className="container">
        <div className="search-bar">
          <input type="search" placeholder="Enter the hero" />
          <a href="#" className="btn search-btn">
            Search
          </a>
        </div>
      </div>
    </section>
  );
};

export { Search };
