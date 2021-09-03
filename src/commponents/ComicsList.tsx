import React from 'react';
import '../css/style.css';
import { ComicsCard } from './ComicsCard';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { ErrorHandler } from './ErrorHandler';
import { useTypeSelector } from '../redux/hooks';

const ComicsList: React.FC = () => {
  const size = '/portrait_fantastic.';
  const { comics, loading } = useTypeSelector((state) => state.comics);

  const errorHandlerComics = () => {
    if (comics.length > 0) {
      return comics.map((comic) => {
        const thumbnail = `${comic.thumbnail.path}${size}${comic.thumbnail.extension}`;
        return (
          <ComicsCard
            key={comic.id}
            id={comic.id}
            title={comic.title}
            description={comic.description}
            thumbnail={thumbnail}
          />
        );
      });
    }
    if (loading) {
      return (
        <Backdrop open invisible={true}>
          <CircularProgress color="secondary" />
        </Backdrop>
      );
    }
    const errorText = 'There are no comics with this hero! Check another one...';
    return <ErrorHandler errorText={errorText} />;
  };

  return (
    <section className="heroes-section">
      <div className="container">
        <div className="heroes-wrapper">{errorHandlerComics()}</div>
      </div>
    </section>
  );
};

export default ComicsList;
