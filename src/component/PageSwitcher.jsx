import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { pageSwitcherButton, pageSwitcherDiv,bg} from '../config/style';



export function PageSwitcher({ currentPage }) {
  const pageNumbers = [
    parseInt(currentPage) - 2,
    parseInt(currentPage) - 1,
    parseInt(currentPage) ,
    parseInt(currentPage) + 1,
    parseInt(currentPage) + 2
   

  ];

  return (
    <div style={{...bg,...pageSwitcherDiv}}>
      {pageNumbers.map((pageNumber) => (
        <Button style={pageSwitcherButton} component={Link} to={`../browser/${pageNumber}`} key={pageNumber}>
          {pageNumber}
        </Button>
      ))}
    </div>
  );
}

