import React from 'react';
import '../css/style.css';
import { ICommics } from '../interfaces/Icommics';
import { CommicsCard } from './CommicsCard';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';

interface IProps {
  commics: ICommics[];
  loading: boolean;
}

//   enum Size {
//   Small = '/portrait_small.',
//   Medium = '/portrait_medium.',
//   Xlarge = '/portrait_xlarge.',
//   Fantastic = '/portrait_fantastic.',
//   Uncanny = '/portrait_uncanny.',
// }

export const CommicsList: React.FC<IProps> = ({ commics, loading }: IProps) => {
  return (
    <section className="heroes-section">
      <div className="container">
        <div className="heroes-wrapper">
          {commics.length && loading ? (
            commics.map((commic) => (
              <CommicsCard
                key={commic.id}
                id={commic.id}
                title={commic.title}
                description={commic.description}
                thumbnail={
                  commic.thumbnail.path + '/portrait_fantastic.' + commic.thumbnail.extension
                }
              />
            ))
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
