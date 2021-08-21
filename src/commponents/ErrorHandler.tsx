import React from 'react';
import '../css/style.css';

interface IProps {
  errorText: string;
}

export const ErrorHandler: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="container error">
      <h1>{props.errorText}</h1>
    </div>
  );
};
