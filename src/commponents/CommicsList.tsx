import React from 'react';
import '../css/style.css';
import { ICommics } from '../interfaces/Icommics';
import { CommicsCard } from './CommicsCard';

interface IProps {
  commics: ICommics[];
}

//   enum Size {
//   Small = '/portrait_small.',
//   Medium = '/portrait_medium.',
//   Xlarge = '/portrait_xlarge.',
//   Fantastic = '/portrait_fantastic.',
//   Uncanny = '/portrait_uncanny.',
// }

export const CommicsList: React.FC<IProps> = ({ commics }: IProps) => {
  return (
    <section className="heroes-section">
      <div className="container">
        <div className="heroes-wrapper">
          {commics.length
            ? commics.map((commic) => (
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
            : null}
        </div>
      </div>
    </section>
  );
};
