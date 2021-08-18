import React from 'react';
import { Pagination } from '@material-ui/lab';
import '../css/style.css';
import { RootState } from '../redux/rootReducer';
import { connect, ConnectedProps } from 'react-redux';

interface IProps extends PropsFromRedux {
  totalPosts: number;
  handleChange(event: React.ChangeEvent<unknown>, page: number): void;
}

const Paginations: React.FC<IProps> = (props: IProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.heroesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <Pagination
        key="num"
        count={pageNumbers.length}
        variant="outlined"
        onChange={props.handleChange}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    heroesPerPage: state.heroes.heroesPerPage,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Paginations);
