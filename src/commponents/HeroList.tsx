import React from 'react';
import { IHero } from '../interfaces/Ihero';
import { HeroCard } from './HeroCard';
import '../css/style.css';

interface IProps {
  heroes: IHero[];
}

export const HeroList: React.FC<IProps> = ({ heroes }: IProps) => {
  const size = '/portrait_fantastic.';
  return (
    <section className="heroes-section">
      <div className="container">
        <div className="heroes-wrapper">
          {heroes.length
            ? heroes.map((hero) => {
                const thumbnail = `${hero.thumbnail.path}${size}${hero.thumbnail.extension}`;
                return (
                  <HeroCard
                    key={hero.id}
                    id={hero.id}
                    name={hero.name}
                    description={hero.description}
                    thumbnail={thumbnail}
                    comics={hero.comics.returned}
                  />
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};
