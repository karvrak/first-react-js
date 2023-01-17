import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '18%',
    backgroundColor: 'black',

  },
});

export function PageSwitcher({ currentPage }) {
  const classes = useStyles();
  const pageNumbers = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2
  ];

  return (
    <div className={classes.root}>
      {pageNumbers.map((pageNumber) => (
        <Button className={classes.button} key={pageNumber}>
          {pageNumber}
        </Button>
      ))}
    </div>
  );
}

