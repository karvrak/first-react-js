import { useParams } from 'react-router-dom';
import {Header} from '../component/Header'
import { ImageGallery } from '../component/ImageGallery';
import { PageSwitcher } from '../component/PageSwitcher';
import { background} from '../config/style';

export function Browser(){
  
    let para = useParams();
    let pageNumber = para.id || 1;


    return (
        <div style= {background}>
            <Header/>
            <ImageGallery  currentPage={pageNumber}/>
            <PageSwitcher currentPage={pageNumber} PageLinked='../browser/'/>
        </div>
    );
        
}