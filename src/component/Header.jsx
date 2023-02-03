
import { Link } from 'react-router-dom';
import {header} from '../config/style';
export function Header(){

    return (
            <div style={header}>
           
                    <Link to="/">
                    <img style = {{marginLeft:'1vh' ,width:'14vh' }} src={`${process.env.PUBLIC_URL}/assets/setSymbol/set-symbol.png`} alt="homepage"/>
                    </Link>
               
            </div>
    )
        
}