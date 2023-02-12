import React, { useState,useRef,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { imageStyleBrowser, GalleryWrappe, GlowAnime, ContentAnime, CardAnime} from '../config/style';
import { ImageBrowser } from './ImageBrowser';

export function ImageGallery({currentPage}) {
  const [imagesPerPage] = useState(10); //number of images per page
  const cardRef = useRef();
 

  const indexOfFirstImg = currentPage * imagesPerPage - imagesPerPage;

  useEffect(() => {
    const card = document.querySelectorAll('.card');
    card.forEach((item) => {
    
      item.addEventListener('mousemove', e => {
      let elRect = cardRef.current.getBoundingClientRect();
        
      let x = e.clientX - elRect.x;
      let y = e.clientY - elRect.y;
  
      let midCardWidth = elRect.width / 2;
      let midCardHeight = elRect.height / 2;
  
      let angleY = -(x - midCardWidth) / 8; 
      let angleX = (y - midCardHeight) / 8;
  
      let glowX = x / elRect.width *100;
      let glowY = y / elRect.height *100;    
  
  
      cardRef.current.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1)`;
      cardRef.current.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1)`;
      
      })
      item.addEventListener('mouseleave', () => {
        cardRef.current.children[0].style.transform = `rotateX(0) rotateY(0)`;
      })
    })
  })
  
 
  

  return (
    <div style={GalleryWrappe}>
          {Array(imagesPerPage).fill().map((_, i) => (
    
            <Link to={`/overview/${indexOfFirstImg+i+1}`}>
              <ImageBrowser imageId={indexOfFirstImg+i+1}/>   
            </Link>
          ))}
    </div>
  );

}
