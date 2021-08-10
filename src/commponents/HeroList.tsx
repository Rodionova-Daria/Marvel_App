import React from 'react';
import { IHero } from '../interfaces/Ihero';
import { HeroCard } from './HeroCard';
import '../css/style.css';

interface IProps {
  heroes: IHero[];
}

//   enum Size {
//   Small = '/portrait_small.',
//   Medium = '/portrait_medium.',
//   Xlarge = '/portrait_xlarge.',
//   Fantastic = '/portrait_fantastic.',
//   Uncanny = '/portrait_uncanny.',
// }

export const HeroList: React.FC<IProps> = ({ heroes }: IProps) => {
  return (
    <section className="heroes-section">
      <div className="container">
        <div className="heroes-wrapper">
          {heroes.length
            ? heroes.map((hero) => (
                <HeroCard
                  key={hero.id}
                  id={hero.id}
                  name={hero.name}
                  description={hero.description}
                  thumbnail={
                    hero.thumbnail.path + '/portrait_fantastic.' + hero.thumbnail.extension
                  }
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};
