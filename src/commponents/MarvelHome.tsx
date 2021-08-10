import React, { Component } from 'react';
import { IHero } from '../interfaces/Ihero';
import { Header } from './Header';
import { Search } from './Search';
import { HeroList } from './HeroList';
import { http } from './axois';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';

interface IProps {
  props: string;
  location: string;
}

interface IState {
  heroes: IHero[];
  baseURL: string;
  searchField: string;
  filterHeroes: IHero[];
  loading: boolean;
}

class MarvelHome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      heroes: [],
      baseURL: 'https://gateway.marvel.com',
      searchField: '',
      filterHeroes: [],
      loading: false,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  async componentDidMount(): Promise<void> {
    try {
      const res = await http<IHero[]>(
        `${this.state.baseURL}:443/v1/public/characters${
          this.props.location.search || '?'
        }&apikey=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({ heroes: res.data.data.results, filterHeroes: res.data.data.results });
      this.setState({ loading: true });
    } catch (res) {
      console.log('Error');
    }
  }

  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchField: e.target.value });
    const filterHeroes = this.state.heroes.filter((hero) => {
      return hero.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    this.setState({ filterHeroes: filterHeroes });
  }

  render(): React.ReactNode {
    return (
      <div>
        <Header />
        {this.state.loading ? (
          <>
            <Search searchChange={this.onSearchChange} searchField={this.state.searchField} />
            <HeroList heroes={this.state.filterHeroes} />
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
