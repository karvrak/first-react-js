import { Header } from '../component/Header';
import { HomePageRoot } from '../component/HomePageRoot';
import { background, bg } from '../config/style';
export function Home(){
 

    return (
        <div style= {{...bg,...background}}>
            <Header/>
            <HomePageRoot/>
        </div>       
    );
        
}



