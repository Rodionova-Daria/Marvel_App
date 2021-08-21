import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Header } from './Header';
import CommicsList from './ComicsList';
import { useActions } from '../redux/hooks';

type IComicsProps = RouteComponentProps<{ id: string }>;

const Comics: React.FC<IComicsProps> = (props: IComicsProps) => {
  const [heroID] = useState(props.match.params.id);
  const { fetchCommicsSaga } = useActions();

  useEffect(() => {
    fetchCommicsSaga(heroID);
  }, []);

  return (
    <div>
      <Header />
      <CommicsList />
    </div>
  );
};

export default Comics;
