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
  descript: {
    height: '250px',
    overflow: 'hidden',
    overflowY: 'auto',
    borderRadius: '10%',
    borderBottom: '1px solid gray',
    padding: '20px',
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
        <Typography className={classes.descript}>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export { CommicsCard };
