import { useParams } from 'react-router-dom';
import {Header} from '../component/Header'
import { ImageOverview } from '../component/ImageOverview';
import { background ,bg} from '../config/style';


export function Overview(){

    let para = useParams();
    let imageId = para.id || 1;
    return (
        <div style=  {{...bg,...background}}>
        <Header/>
        <ImageOverview  imageId={imageId}/>
        </div>);
        
        
        
}