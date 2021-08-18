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
import { fetchHeroSaga, searchValue } from '../redux/actions';

interface IProps extends RouteComponentProps<{ location: string }>, PropsFromRedux {}

interface IState {
  currentPage: number;
}

class MarvelHome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currentPage: 1,
    };

    this.filterHeroes = this.filterHeroes.bind(this);
    this.paginationHandleChange = this.paginationHandleChange.bind(this);
  }

  async componentDidMount(): Promise<void> {
    await this.props.fetchHeroSaga(this.props.location.search);
  }

  filterHeroes(posts: IHero[]): IHero[] {
    const searchField = this.props.searchField.toLowerCase();
    return posts.filter((hero) => hero.name.toLowerCase().includes(searchField));
  }

  paginationHandleChange(event: React.ChangeEvent<unknown>, page: number): void {
    this.setState({ currentPage: page });
  }

  checkOnPosts(currentPosts: IHero[]): IHero[] {
    if (this.props.searchField === '') {
      return this.filterHeroes(currentPosts);
    } else {
      return this.filterHeroes(this.props.heroes);
    }
  }

  render(): React.ReactNode {
    const indexOfLastPost = this.state.currentPage * this.props.heroesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.props.heroesPerPage;
    const currentPosts = this.props.heroes.slice(indexOfFirstPost, indexOfLastPost);
    const filterHeroes = this.checkOnPosts(currentPosts);
    return (
      <div>
        <Header />
        {!this.props.loading ? (
          <>
            <Search />
            <HeroList heroes={filterHeroes} />
            <Paginations
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
    searchField: state.searchField.serchField,
    heroesPerPage: state.heroes.heroesPerPage,
  };
};

const connector = connect(mapStateToProps, { searchValue, fetchHeroSaga });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MarvelHome);
