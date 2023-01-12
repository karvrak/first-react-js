import { Link } from 'react-router-dom';

export function Home(){


    return(
    
        <div>        
            <h1>Home</h1>
            <nav>
                <Link to="/AddItem">AddItem</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/browse">Browse</Link>                
            </nav>
        </div>
    );
        
}



