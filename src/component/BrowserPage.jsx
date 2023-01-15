import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export function BrowserPage(){

    const [pagenb, setPagenb] = React.useState(2);


    return (
        <div style={{margin:'auto', width:'20%',paddingTop:'10vh'}}>
            <ButtonGroup size="large" variant="outlined">
                <Button >{pagenb-2}</Button>
                <Button >{pagenb-1}</Button>
                <Button >{pagenb}</Button>
                <Button >{pagenb+1}</Button>
                <Button >{pagenb+2}</Button>
            </ButtonGroup>
        </div>
    )
}    