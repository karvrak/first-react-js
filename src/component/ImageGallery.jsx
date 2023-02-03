import React, { useState,useRef  } from 'react';
import { imageStyleBrowser, GalleryWrappe} from '../config/style';


export function ImageGallery({currentPage}) {
  const [imagesPerPage] = useState(10); //number of images per page


  const indexOfFirstImg = currentPage * imagesPerPage - imagesPerPage;

  
  return (
    <div style={GalleryWrappe}>
          {Array(imagesPerPage).fill().map((_, i) => (
    
            
              <a  href={`../overview/${indexOfFirstImg+i+1}`}>
                  <img 
               
                  style={imageStyleBrowser}
                  src={`../assets/Cards/C${indexOfFirstImg+i+1}.jpg`} 
                  alt={`Card ${indexOfFirstImg+i+1}`} 
                  /> 
              </a>  
            
          ))}
    </div>
  );

}
