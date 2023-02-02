import { imageStyleOverview } from '../config/style';

export function ImageOverview({imageId}) {

  return (
    <div >
          <img 
            style={imageStyleOverview} 
            src={`${process.env.PUBLIC_URL}/assets/Cards/C${imageId}.jpg`} 
            alt={`card ${imageId}`} 
          />       
     </div>      
  );
}