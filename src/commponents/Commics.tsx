import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Header } from './Header';
import CommicsList from './CommicsList';
import { connect, ConnectedProps } from 'react-redux';
import { fetchCommicsSaga } from '../redux/actions';

interface ICommicsProps extends RouteComponentProps<{ id: string }>, PropsFromRedux {}

interface ICommicsState {
  heroID: string;
}

class Commics extends Component<ICommicsProps, ICommicsState> {
  constructor(props: ICommicsProps) {
    super(props);

    this.state = {
      heroID: props.match.params.id,
    };
  }

  async componentDidMount(): Promise<void> {
    await this.props.fetchCommicsSaga(this.state.heroID);
  }

  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <CommicsList />
      </div>
    );
  }
}
const connector = connect(null, { fetchCommicsSaga });
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Commics);
