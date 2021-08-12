import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

interface IProps {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  commics: number;
}

const useStyles = makeStyles(() => ({
  card: {
    width: '25%',
    textAlign: 'center',
    marginBottom: '20px',
  },
  commics: {
    color: 'red',
    fontWeight: 500,
  },
}));

export const HeroCard: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  const { name, description, thumbnail, id, commics } = props;
  return (
    <Card className={classes.card}>
      <Link to={`/commics/${id}`} className="link">
        <img src={thumbnail} alt="hero" className="thumbnail" />
      </Link>
      <CardContent>
        <Typography variant="h5">
          <Link to={`/commics/${id}`} className="link">
            {name}
          </Link>
        </Typography>
        <Typography>{description}</Typography>
        <Typography className={classes.commics}>Commics: {commics}</Typography>
      </CardContent>
    </Card>
  );
};
