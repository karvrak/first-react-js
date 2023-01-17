import React from 'react';
import {UploadFiles} from '../component/UploadFiles';
import { background, firstDiv } from '../config/style';


export function AddItem(){
  
    return (
        
      <div style= {{background}}>
        <UploadFiles directory='../assets'/>

      </div>
      );
        
}