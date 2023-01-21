import { imageStyleOverview } from '../config/style';



export function ImageOverview({imageId}) {
    console.log(imageId);
    
  return (
    <div>
          
          <img 
            style={imageStyleOverview} 
            src={`${process.env.PUBLIC_URL}/assets/C${imageId}.jpg`} 
            alt={`card ${imageId}`} 
          />
       
        
    </div>
  );
}