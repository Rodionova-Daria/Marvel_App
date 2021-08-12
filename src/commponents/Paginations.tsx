import React from 'react';
import { Pagination } from '@material-ui/lab';
import '../css/style.css';

interface IProps {
  postsPerPage: number;
  totalPosts: number;
  handleChange(event: React.ChangeEvent<unknown>, page: number): void;
}

export const Paginations: React.FC<IProps> = ({
  postsPerPage,
  totalPosts,
  handleChange,
}: IProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <Pagination key="num" count={pageNumbers.length} variant="outlined" onChange={handleChange} />
    </div>
  );
};
