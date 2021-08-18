import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import '../css/style.css';
import { IHero } from '../interfaces/Ihero';
import { RootState } from '../redux/rootReducer';
import { searchValue, sortHeroes } from '../redux/actions';

class Search extends Component<PropsFromRedux> {
  constructor(props: PropsFromRedux) {
    super(props);

    this.onSearchChange = this.onSearchChange.bind(this);
    this.sortByCommics = this.sortByCommics.bind(this);
  }

  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.searchValue(e.target.value);
  }

  sortByCommics(): void {
    const sortHeroes: IHero[] = this.props.heroes.sort(
      (first: IHero, last: IHero) => last.comics.returned - first.comics.returned
    );
    this.props.sortHeroes(sortHeroes);
  }

  render() {
    return (
      <section className="search">
        <div className="container">
          <div className="search-bar">
            <input type="search" placeholder="Enter the hero" onChange={this.onSearchChange} />
            <a className="btn search-btn" onClick={this.sortByCommics}>
              Order By Number Of Commics
            </a>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    heroes: state.heroes.fetchHeroes,
    searchField: state.searchField.serchField,
  };
};

const connector = connect(mapStateToProps, { searchValue, sortHeroes });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Search);
