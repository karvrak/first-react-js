import {Header} from '../component/Header'
import { bgColor ,background} from '../config/style';

export function Contact(){
   
    return (
        <div style= {{...bgColor,...background}}>
            <Header/>
        </div>
        );
        
}