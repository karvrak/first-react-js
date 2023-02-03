
import {header} from '../config/style';
export function Header(){

    return (
            <div style={header}>
                <a href="/">
                    <img style = {{marginLeft:'1vh' ,width:'14vh' }} src={`${process.env.PUBLIC_URL}/set-symbol.png`} alt="homepage"/>
                </a>
            </div>
    )
        
}