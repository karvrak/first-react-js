import { Header } from '../component/Header';
import { HomePageRoot } from '../component/HomePageRoot';
import { background, bgColor } from '../config/style';
export function Home(){
 

    return (
        <div style= {{...bgColor,...background}}>
            <Header/>
            <HomePageRoot/>
        </div>       
    );
        
}



