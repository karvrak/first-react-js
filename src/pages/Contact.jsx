import {Header} from '../component/Header'
import { FormContact } from '../component/FormContact';
import { background,firstDiv } from '../config/style';

export function Contact(){
   

    return (
        <div style={background}>
        <Header/>
        <div style= {firstDiv}>
        <FormContact/>

        </div>
        </div>);
        
}