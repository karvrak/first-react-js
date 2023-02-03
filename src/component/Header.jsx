
import {header} from '../config/style';
export function Header(){

    return (
            <div style={header}>
                <a href="/">
                    <img style = {{marginLeft:'1vh' ,width:'14vh' }} src={`../assets/setSymbol/set-symbol.png`} alt="homepage"/>
                </a>
            </div>
    )
        
}