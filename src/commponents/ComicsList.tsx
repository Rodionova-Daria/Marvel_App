import React from 'react';
import '../css/style.css';
import { ComicsCard } from './ComicsCard';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const ComicsList: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const size = '/portrait_fantastic.';
  return (
    <section className="heroes-section">
      <div className="container">
        <div className="heroes-wrapper">
          {props.comics.length && !props.loading ? (
            props.comics.map((comic) => {
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
            })
          ) : (
            <Backdrop open invisible={true}>
              <CircularProgress color="secondary" />
            </Backdrop>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    comics: state.comics.fetchComics,
    loading: state.comics.loading,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ComicsList);
