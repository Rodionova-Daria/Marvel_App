import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Header } from './Header';
import CommicsList from './ComicsList';
import { useActions, useTypeSelector } from '../redux/hooks';
import { ErrorHandler } from './ErrorHandler';

type IComicsProps = RouteComponentProps<{ id: string }>;

const Comics: React.FC<IComicsProps> = (props: IComicsProps) => {
  const [heroID] = useState(props.match.params.id);
  const { fetchCommicsSaga } = useActions();
  const { error } = useTypeSelector((state) => state.comics);
  const errorText = 'Error in comics request. Try again later';

  useEffect(() => {
    fetchCommicsSaga(heroID);
  }, []);

  return (
    <div>
      <Header />
      {error ? <ErrorHandler errorText={errorText} /> : <CommicsList />}
    </div>
  );
};

export default Comics;
