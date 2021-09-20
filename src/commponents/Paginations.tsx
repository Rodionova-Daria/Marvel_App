import React from 'react';
import { Pagination } from '@material-ui/lab';
import '../css/style.css';

interface IProps {
  searchField: string | string[];
  handleChange(event: React.ChangeEvent<unknown>, page: number): void;
}

const Paginations: React.FC<IProps> = (props: IProps) => {
  let count = 3;
  if (props.searchField) {
    count = 1;
  }
  return (
    <div className="pagination">
      <Pagination key="num" count={count} variant="outlined" onChange={props.handleChange} />
    </div>
  );
};

export default Paginations;
