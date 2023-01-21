import { imageStyleOverview } from '../config/style';



export function ImageOverview({imageId}) {
    console.log(imageId);
    
  return (
    <div>
          
          <img 
            style={imageStyleOverview} 
            src={`/assets/C${imageId}.jpg`} 
            alt={`Image ${imageId}`} 
          />
       
        
    </div>
  );
}