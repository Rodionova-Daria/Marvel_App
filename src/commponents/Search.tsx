import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import '../css/style.css';
import { IHero } from '../interfaces/Ihero';
import { RootState } from '../redux/rootReducer';
import { sortHeroes } from '../redux/actions';

interface IProps extends PropsFromRedux {
  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

class Search extends Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.sortByCommics = this.sortByCommics.bind(this);
  }

  sortByCommics(): void {
    const sortedHeroes: IHero[] = this.props.heroes.sort(
      (first: IHero, last: IHero) => last.comics.returned - first.comics.returned
    );
    this.props.sortHeroes(sortedHeroes);
  }

  render() {
    return (
      <section className="search">
        <div className="container">
          <div className="search-bar">
            <input
              type="search"
              placeholder="Enter the hero"
              onChange={this.props.onSearchChange}
            />
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
  };
};

const connector = connect(mapStateToProps, { sortHeroes });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Search);
