import { useParams } from 'react-router-dom';
import {Header} from '../component/Header'
import { ImageOverview } from '../component/ImageOverview';
import { background, OverviewFlex,bgColor } from '../config/style';
import { ImageDesc } from '../component/ImageDesc';
import { PageSwitcher } from '../component/PageSwitcher';

export function Overview(){

    let para = useParams();
    let imageId = para.id || 1;
    return (
        <div style=  {{...bgColor,...background}}>
            <Header/>

            

            <div style={OverviewFlex}>
            <ImageOverview  imageId={imageId}/>
            <ImageDesc  imageId={imageId}/>
            </div>            
            <PageSwitcher currentPage={imageId} PageLinked='../overview/'/>

        </div>
    );
        
        
        
}