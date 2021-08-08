import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';
import { IHero } from '../interfaces/Ihero';

interface IProps {
  props: string;
  location: string;
}

interface IState {
  heroes: IHero[];
  param:
    | string
    | {
        (regexp: string | RegExp): number;
        (searcher: { [Symbol.search](string: string): number }): number;
      };
}

class MarvelHome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      heroes: [],
      param: this.props.location.search ? this.props.location.search : '?',
    };
  }

  componentDidMount(): void {
    axios
      .get<IHero[]>(
        `https://gateway.marvel.com:443/v1/public/characters${this.state.param}&apikey=c654719a1f9aca8fa22982b328b85869`
      )
      .then((res: AxiosResponse) => {
        return this.setState({ heroes: res.data.data.results });
      })
      .catch((err) => console.log(err));
  }

  render(): React.ReactNode {
    const { heroes } = this.state;
    console.log(heroes);
    return (
      <div>
        <h1>Marvel Home</h1>
        <div>
          {heroes.length
            ? heroes.map((hero) => (
                <div key={hero.id}>
                  {' '}
                  <Link to={`/commics/${hero.id}`}> {hero.name} </Link>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default MarvelHome;
