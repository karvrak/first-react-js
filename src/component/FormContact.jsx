import { FormControl,InputLabel,Input,FormHelperText } from '@mui/material';
import React from 'react';


export function FormContact({id , imgUrl}) {

    return (
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
    )
}
