import {Box} from '@mui/material';
import {Link} from 'react-router-dom';
import {header} from '../config/style';
export function Header(){

    return (
            <Box style={header}>
                <Link to="/">
                    <img style = {{marginLeft:'1vh' ,width:'14vh' }} src={`${process.env.PUBLIC_URL}/set-symbol.png`} alt="homepage"/>
                </Link>
            </Box>
    )
        
}