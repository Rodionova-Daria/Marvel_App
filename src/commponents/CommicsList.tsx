import React from 'react';
import '../css/style.css';
import { CommicsCard } from './CommicsCard';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const CommicsList: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const size = '/portrait_fantastic.';
  return (
    <section className="heroes-section">
      <div className="container">
        <div className="heroes-wrapper">
          {props.commics.length && !props.loading ? (
            props.commics.map((commic) => {
              const thumbnail = `${commic.thumbnail.path}${size}${commic.thumbnail.extension}`;
              return (
                <CommicsCard
                  key={commic.id}
                  id={commic.id}
                  title={commic.title}
                  description={commic.description}
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
    commics: state.commics.fetchCommics,
    loading: state.commics.loading,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CommicsList);
