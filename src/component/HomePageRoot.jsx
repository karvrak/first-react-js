import React from "react";
import { buttonHome, firstDiv} from '../config/style';

export function HomePageRoot(){
       
    return (            
        <div style={firstDiv}>
                      
                <a style={buttonHome}  href="/browser/1">Browser</a>
                <a style={buttonHome} href="/contact">Contact</a>                       

        </div>
    )
}    