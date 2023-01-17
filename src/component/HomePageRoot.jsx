import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { buttonHome, firstDiv} from '../config/style';

export function HomePageRoot(){
    

       
    return (     
              
        <div style={firstDiv}  >
            <nav >
                                  
                    <Button style={buttonHome} component={Link} to="/browser">browser</Button>
                                
                    <Button style={buttonHome} component={Link} to="/contact">contact</Button>

            </nav>
        </div>
  
    )
}    