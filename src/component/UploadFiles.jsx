import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import FileReaderInput from 'react-file-reader';
import { firstDiv} from '../config/style';

export function UploadFiles() {
  const [images, setImages] = useState([]);

  const handleChange = (e, results) => {
    results.forEach((result) => {
      const [e, file] = result;
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages((prevImages) => [...prevImages, event.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div style={firstDiv}>
      <FileReaderInput as="binary" id="my-file-input" onChange={handleChange}>
        <button>Choose Image</button>
      </FileReaderInput>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={4} key={index}>
            <Paper>
              <img src={image} alt={`Image ${index + 1}`} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}