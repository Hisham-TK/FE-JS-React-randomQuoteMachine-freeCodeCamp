import { Grid } from '@mui/material';
import React from 'react';
import { Quote } from '../quote/Quote';
import './App.sass';

function App() {
  return (
    <Grid container id="app">
      <Quote />
    </Grid>
  );
}

export default App;
