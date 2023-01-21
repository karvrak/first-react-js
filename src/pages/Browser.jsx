import { useParams } from 'react-router-dom';
import {Header} from '../component/Header'
import { ImageGallery } from '../component/ImageGallery';
import { PageSwitcher } from '../component/PageSwitcher';

export function Browser(){
  
    let para = useParams();
    let pageNumber = para.id || 1;


    return (
        <div>
        <Header/>

        <ImageGallery  currentPage={pageNumber}/>
        <PageSwitcher currentPage={pageNumber}/>
        </div>);
        
}