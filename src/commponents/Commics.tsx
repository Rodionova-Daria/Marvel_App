import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ICommics } from '../interfaces/Icommics';
import { Header } from './Header';
import { http } from './axois';

type ICommicsProps = RouteComponentProps<{ id: string }>;

interface ICommicsState {
  heroes: ICommics[];
  heroID: string;
  baseURL: string;
}

class Commics extends Component<ICommicsProps, ICommicsState> {
  constructor(props: ICommicsProps) {
    super(props);

    this.state = {
      heroes: [],
      heroID: props.match.params.id,
      baseURL: 'https://gateway.marvel.com',
    };
  }

  async componentDidMount(): Promise<void> {
    try {
      const res = await http<ICommics[]>(
        `${this.state.baseURL}:443/v1/public/characters/${this.state.heroID}/comics?apikey=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({ heroes: res.data.data.results });
    } catch (res) {
      console.log('Error');
    }
  }

  render(): React.ReactNode {
    const { heroes } = this.state;
    return (
      <div>
        <Header />
        <h1>Commics</h1>
        <ul>{heroes.length ? heroes.map((hero) => <li key={hero.id}>{hero.title}</li>) : null}</ul>
      </div>
    );
  }
}

export { Commics };
