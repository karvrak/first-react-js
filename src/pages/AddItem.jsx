import React from 'react';
import {UploadFiles} from '../component/UploadFiles';
import { background, bg, firstDiv } from '../config/style';


export function AddItem(){
  
    return (
        
      <div style= {{...bg,...background}}>
        
        <UploadFiles directory='../assets'/>

      </div>
      );
        
}