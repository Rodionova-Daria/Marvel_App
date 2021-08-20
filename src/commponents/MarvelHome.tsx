import React, { Component } from 'react';
import { IHero } from '../interfaces/Ihero';
import { Header } from './Header';
import Search from './Search';
import { HeroList } from './HeroList';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import Paginations from './Paginations';
import { RootState } from '../redux/rootReducer';
import { connect, ConnectedProps } from 'react-redux';
import { fetchHeroSaga } from '../redux/actions';

type IProps = RouteComponentProps<{ location: string }> & PropsFromRedux;

interface IState {
  currentPage: number;
  searchField: string;
  heroesPerPage: number;
}

class MarvelHome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currentPage: 1,
      searchField: '',
      heroesPerPage: 4,
    };

    this.filterHeroes = this.filterHeroes.bind(this);
    this.paginationHandleChange = this.paginationHandleChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  async componentDidMount(): Promise<void> {
    await this.props.fetchHeroSaga(this.props.location.search);
  }

  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchField: e.target.value });
  }

  filterHeroes(posts: IHero[]): IHero[] {
    const searchField = this.state.searchField.toLowerCase();
    return posts.filter((hero) => hero.name.toLowerCase().includes(searchField));
  }

  paginationHandleChange(event: React.ChangeEvent<unknown>, page: number): void {
    this.setState({ currentPage: page });
  }

  checkOnPosts(currentPosts: IHero[]): IHero[] {
    if (this.state.searchField === '') {
      return this.filterHeroes(currentPosts);
    } else {
      return this.filterHeroes(this.props.heroes);
    }
  }

  render(): React.ReactNode {
    const indexOfLastPost = this.state.currentPage * this.state.heroesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.heroesPerPage;
    const currentPosts = this.props.heroes.slice(indexOfFirstPost, indexOfLastPost);
    const filterHeroes = this.checkOnPosts(currentPosts);
    return (
      <div>
        <Header />
        {!this.props.loading ? (
          <>
            <Search onSearchChange={this.onSearchChange} />
            <HeroList heroes={filterHeroes} />
            <Paginations
              heroesPerPage={this.state.heroesPerPage}
              totalPosts={this.props.heroes.length}
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

const mapStateToProps = (state: RootState) => {
  return {
    heroes: state.heroes.fetchHeroes,
    loading: state.heroes.loading,
  };
};

const connector = connect(mapStateToProps, { fetchHeroSaga });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MarvelHome);
