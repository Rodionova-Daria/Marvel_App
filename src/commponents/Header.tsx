import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <Link to={`/`}>
          <img src="/assets/marvel-logo.png" alt="MARVEL" className="logo" />
        </Link>
      </div>
    </header>
  );
};

export { Header };
