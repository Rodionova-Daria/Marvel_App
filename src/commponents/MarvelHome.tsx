import React, { Component } from 'react';
import { IHero } from '../interfaces/Ihero';
import { Header } from './Header';
import { Search } from './Search';
import { HeroList } from './HeroList';
import { getHeroes } from './getHeroes';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

type IProps = RouteComponentProps<{ location: string }>;

interface IState {
  heroes: IHero[];
  searchField: string;
  loading: boolean;
}

class MarvelHome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      heroes: [],
      searchField: '',
      loading: true,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.filterHeroes = this.filterHeroes.bind(this);
  }

  async componentDidMount(): Promise<void> {
    try {
      const res = await getHeroes(this.props.location.search);
      this.setState({
        heroes: res.data.data.results,
        loading: false,
      });
    } catch (err) {
      console.log(`Request was failed ${err}`);
    }
  }

  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchField: e.target.value });
  }

  filterHeroes(): IHero[] {
    const searchField = this.state.searchField.toLowerCase();
    return this.state.heroes.filter((hero) => hero.name.toLowerCase().includes(searchField));
  }

  render(): React.ReactNode {
    const filterHeroes = this.filterHeroes();
    return (
      <div>
        <Header />
        {!this.state.loading ? (
          <>
            <Search searchChange={this.onSearchChange} searchField={this.state.searchField} />
            <HeroList heroes={filterHeroes} />
          </>
        ) : (
          <Backdrop open invisible={true}>
            <CircularProgress color="secondary" />
          </Backdrop>
        )}
      </div>
    );
  }
}

export default MarvelHome;
