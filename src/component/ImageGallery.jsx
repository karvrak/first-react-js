import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { imageStyleBrowser , bg, imageGalleryContainer, GridBrowser} from '../config/style';
export function ImageGallery({currentPage}) {
  const [imagesPerPage] = useState(9); //number of images per page

 

  const indexOfFirstImg = currentPage * imagesPerPage - imagesPerPage;

  return (
    <div style={imageGalleryContainer}>
      <Grid style={{...bg,...GridBrowser}} container spacing={4}>
        {Array(9).fill().map((_, i) => (
          <Grid key={i} item xs={4}>
            <Link to={`../overview/${indexOfFirstImg+i+1}`}>
            <img 
              style={imageStyleBrowser} 
              src={`${process.env.PUBLIC_URL}/assets/C${indexOfFirstImg+i+1}.jpg`} 
              alt={`Card ${indexOfFirstImg+i+1}`} 
            />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}