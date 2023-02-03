import React from "react";
import { buttonHome, firstDiv} from '../config/style';
import { Link } from 'react-router-dom';

export function HomePageRoot(){
       
    return (            
        <div style={firstDiv}>
                      
                <Link to="/browser/1">
                    <p style={buttonHome} >Browser</p>
                </Link>
                <Link to="/contact">
                    <p style={buttonHome} >contact</p>

                </Link>                     

        </div>
    )
}    