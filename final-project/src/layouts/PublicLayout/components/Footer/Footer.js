import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Nguyen Tai Nguyen
      </Typography>
      <Typography variant="caption">
        Crafted with love |{' '}
        <Link href="https://github.com/1660392hcmus/final-project/tree/main/final-project" target="_blank" rel="noopener">
          Nguyen Tai Nguyen
        </Link>
      </Typography>
    </div>
  );
}
