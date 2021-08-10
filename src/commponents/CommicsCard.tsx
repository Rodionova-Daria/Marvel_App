import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

interface IProps {
  id?: number;
  description: string;
  thumbnail: string;
  title: string;
}

const useStyles = makeStyles(() => ({
  card: {
    width: '25%',
    textAlign: 'center',
    marginBottom: '20px',
  },
}));

const CommicsCard: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  const { description, thumbnail, title } = props;
  return (
    <Card className={classes.card}>
      <img src={thumbnail} alt="hero" />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export { CommicsCard };
