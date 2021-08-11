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

export const CommicsList: React.FC<IProps> = ({ commics, loading }: IProps) => {
  const size = '/portrait_fantastic.';
  return (
    <section className="heroes-section">
      <div className="container">
        <div className="heroes-wrapper">
          {commics.length && !loading ? (
            commics.map((commic) => (
              <CommicsCard
                key={commic.id}
                id={commic.id}
                title={commic.title}
                description={commic.description}
                thumbnail={`${commic.thumbnail.path}${size}${commic.thumbnail.extension}`}
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
