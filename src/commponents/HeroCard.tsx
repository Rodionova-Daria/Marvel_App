import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

interface IProps {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
}

const useStyles = makeStyles(() => ({
  card: {
    width: '25%',
    textAlign: 'center',
    marginBottom: '20px',
  },
}));

const HeroCard: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  const { name, description, thumbnail, id } = props;
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
      </CardContent>
    </Card>
  );
};

export { HeroCard };
