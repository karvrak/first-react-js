import React from 'react';


const CardProps = {
    id : 0,
    imgUrl :''
}


export function Card({id , imgUrl}) {

    return (
        <>
            <a href={'/overview/'+id}><image src ={imgUrl} alt={'card'+id}></image></a>
        </>
    )
}


    