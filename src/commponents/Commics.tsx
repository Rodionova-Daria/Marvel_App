import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ICommics } from '../interfaces/Icommics';
import { Header } from './Header';
import { getCommics } from './api';
import { CommicsList } from './CommicsList';

type ICommicsProps = RouteComponentProps<{ id: string }>;

interface ICommicsState {
  commics: ICommics[];
  heroID: string;
  loading: boolean;
}

class Commics extends Component<ICommicsProps, ICommicsState> {
  constructor(props: ICommicsProps) {
    super(props);

    this.state = {
      commics: [],
      heroID: props.match.params.id,
      loading: true,
    };
  }

  async componentDidMount(): Promise<void> {
    try {
      const res = await getCommics(this.state.heroID);
      this.setState({ commics: res.data.data.results, loading: false });
    } catch (err) {
      console.log(`Request was failed ${err}`);
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
