import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ICommics } from '../interfaces/Icommics';
import { Header } from './Header';
import { http } from './axois';
import { CommicsList } from './CommicsList';

type ICommicsProps = RouteComponentProps<{ id: string }>;

interface ICommicsState {
  commics: ICommics[];
  heroID: string;
  baseURL: string;
  loading: boolean;
}

class Commics extends Component<ICommicsProps, ICommicsState> {
  constructor(props: ICommicsProps) {
    super(props);

    this.state = {
      commics: [],
      heroID: props.match.params.id,
      baseURL: 'https://gateway.marvel.com',
      loading: false,
    };
  }

  async componentDidMount(): Promise<void> {
    try {
      const res = await http<ICommics[]>(
        `${this.state.baseURL}:443/v1/public/characters/${this.state.heroID}/comics?apikey=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({ commics: res.data.data.results });
      this.setState({ loading: true });
    } catch (res) {
      console.log('Error');
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <CommicsList commics={this.state.commics} loading={this.state.loading} />
      </div>
    );
  }
}

export { Commics };
