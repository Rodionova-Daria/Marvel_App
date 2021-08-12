import React, { Component } from 'react';
import { IHero } from '../interfaces/Ihero';
import { Header } from './Header';
import { Search } from './Search';
import { HeroList } from './HeroList';
import { getHeroes } from './api';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { Paginations } from './Paginations';

type IProps = RouteComponentProps<{ location: string }>;

interface IState {
  heroes: IHero[];
  searchField: string;
  loading: boolean;
  currentPage: number;
  heroesPerPage: number;
  hero: IHero[];
}

class MarvelHome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      heroes: [],
      searchField: '',
      loading: true,
      currentPage: 1,
      heroesPerPage: 4,
      hero: [],
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.filterHeroes = this.filterHeroes.bind(this);
    this.paginationHandleChange = this.paginationHandleChange.bind(this);
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

  filterHeroes(currentPosts: IHero[]): IHero[] {
    const searchField = this.state.searchField.toLowerCase();
    return currentPosts.filter((hero) => hero.name.toLowerCase().includes(searchField));
  }

  paginationHandleChange(event: React.ChangeEvent<unknown>, page: number): void {
    this.setState({ currentPage: page });
  }

  render(): React.ReactNode {
    const indexOfLastPost = this.state.currentPage * this.state.heroesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.heroesPerPage;
    const currentPosts = this.state.heroes.slice(indexOfFirstPost, indexOfLastPost);
    const filterHeroes =
      this.state.searchField === ''
        ? this.filterHeroes(currentPosts)
        : this.filterHeroes(this.state.heroes);
    return (
      <div>
        <Header />
        {!this.state.loading ? (
          <>
            <Search searchChange={this.onSearchChange} searchField={this.state.searchField} />
            <HeroList heroes={filterHeroes} />
            <Paginations
              postsPerPage={this.state.heroesPerPage}
              totalPosts={this.state.heroes.length}
              handleChange={this.paginationHandleChange}
            />
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
