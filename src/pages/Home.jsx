import { Link } from 'react-router-dom';
import { Header } from '../component/Header';

export function Home(){

    return (
        <>
            <Header/>
            <div>                
                <div >
                    <nav>
                    <ul style = {{alignItems:'center'}}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/addItem">addItem</Link>
                        </li>
                        <li>
                            <Link to="/browser">browser</Link>
                        </li>
                        <li>
                            <Link to="/overview">overview</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                       
                    </ul>
                    </nav>
                </div>\
            </div>
        </>       
    );
        
}



