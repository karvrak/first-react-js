import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
export function Header(){


    return (
        <>
            <Box sx={{backgroundColor: '#FF2255', height: '15vh', weight: '100vh'}}>
                <Link to="/">
                    <img style = {{marginLeft:'1vh' ,width:'15vh' }} src="/set-symbol.png" alt="homepage"/>
                </Link>
            </Box>
        </>
    )
        
}