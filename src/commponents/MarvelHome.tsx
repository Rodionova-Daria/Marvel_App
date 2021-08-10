import React, { Component } from 'react';
import { IHero } from '../interfaces/Ihero';
import { Header } from './Header';
import { Search } from './Search';
import { HeroList } from './HeroList';
import { http } from './axois';

interface IProps {
  props: string;
  location: string;
}

interface IState {
  heroes: IHero[];
  baseURL: string;
}

class MarvelHome extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      heroes: [],
      baseURL: 'https://gateway.marvel.com',
    };
  }

  async componentDidMount(): Promise<void> {
    try {
      const res = await http<IHero[]>(
        `${this.state.baseURL}:443/v1/public/characters${
          this.props.location.search || '?'
        }&apikey=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({ heroes: res.data.data.results });
    } catch (res) {
      console.log('Error');
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Search />
        <HeroList heroes={this.state.heroes} />;
      </div>
    );
  }
}

export default MarvelHome;
