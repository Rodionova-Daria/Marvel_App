import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import { ICommics } from '../interfaces/Icommics';

type ICommicsProps = RouteComponentProps<{ id: string }>;

interface ICommicsState {
  hero: ICommics[];
  heroID: string;
}

class Commics extends Component<ICommicsProps, ICommicsState> {
  constructor(props: ICommicsProps) {
    super(props);

    this.state = {
      hero: [],
      heroID: props.match.params.id,
    };
  }

  componentDidMount(): void {
    axios
      .get<ICommics>(
        `https://gateway.marvel.com:443/v1/public/characters/${this.state.heroID}/comics?apikey=c654719a1f9aca8fa22982b328b85869`
      )
      .then((res: AxiosResponse) => {
        return this.setState({ hero: res.data.data.results });
      })
      .catch((err) => console.log(err));
  }
  render(): React.ReactNode {
    const { hero } = this.state;
    return (
      <div>
        <h1>Commics</h1>
        <ul>{hero.length ? hero.map((hero) => <li key={hero.id}>{hero.title}</li>) : null}</ul>
      </div>
    );
  }
}

export { Commics };
