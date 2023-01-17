
import {Header} from '../component/Header'
import { ImageGallery } from '../component/ImageGallery';
import { background } from '../config/style';

export function Browser(){
  

    return (
        <div style= {background}>
        <Header/>

        <ImageGallery directory='../assets'/>
        
        </div>);
        
}