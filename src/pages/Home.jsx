import { Header } from '../component/Header';
import { HomePageRoot } from '../component/HomePageRoot';
import { background} from '../config/style';
export function Home(){
 

    return (
        <div style= {background}>
            <Header/>
            <HomePageRoot/>
        </div>       
    );
        
}



