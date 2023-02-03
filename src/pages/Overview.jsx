import { useParams } from 'react-router-dom';
import {Header} from '../component/Header'
import { ImageOverview } from '../component/ImageOverview';
import { background, OverviewFlex} from '../config/style';
import { ImageDesc } from '../component/ImageDesc';
import { PageSwitcher } from '../component/PageSwitcher';
import  {ErrorBoundary}  from '../component/Error' ;
export function Overview(){

    let para = useParams();
    let imageId = para.id || 1;
    return (
        <div style=  {background}>
            <Header/>

            

            <div style={OverviewFlex}>
            <ImageOverview  imageId={imageId}/>
            <ErrorBoundary>
            {/*<ImageDesc  imageId={imageId}/>*/}

            </ErrorBoundary>
            </div>            
            <PageSwitcher currentPage={imageId} PageLinked='../overview/'/>

        </div>
    );
        
        
        
}