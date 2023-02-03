import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { pageSwitcherButton, pageSwitcherButtonDiseable, SwitcherStyle} from '../config/style';


export function PageSwitcher({ currentPage, PageLinked }) {
  const pageNumbers = [
    parseInt(currentPage) - 2,
    parseInt(currentPage) - 1,
    parseInt(currentPage) ,
    parseInt(currentPage) + 1,
    parseInt(currentPage) + 2
  ];

  return (
    <div style={SwitcherStyle} >
      {pageNumbers.map((pageNumber) => (
        <Button style={pageNumber == currentPage || pageNumber < 1? pageSwitcherButtonDiseable : pageSwitcherButton  } component={Link} to={`${PageLinked}${pageNumber}`} key={pageNumber} disabled={pageNumber == currentPage || pageNumber < 1}>
          {pageNumber}
        </Button>    
      ))}
    </div>
  );
}

