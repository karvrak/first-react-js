import React, { useState,useRef  } from 'react';
import { Link } from 'react-router-dom';
import { imageStyleBrowser, GalleryWrappe} from '../config/style';


export function ImageGallery({currentPage}) {
  const [imagesPerPage] = useState(10); //number of images per page


  const indexOfFirstImg = currentPage * imagesPerPage - imagesPerPage;

  
  return (
    <div style={GalleryWrappe}>
          {Array(imagesPerPage).fill().map((_, i) => (
    
            
              
                <Link to={`../overview/${indexOfFirstImg+i+1}`}>
                  <img 
               
                  style={imageStyleBrowser}
                  src={`${process.env.PUBLIC_URL}/assets/Cards/C${indexOfFirstImg+i+1}.jpg`} 
                  alt={`Card ${indexOfFirstImg+i+1}`} 
                  /> 
                  </Link>
             
            
          ))}
    </div>
  );

}
