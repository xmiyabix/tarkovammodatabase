import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Button } from "@mui/material";


const App = () => {
  return (
    <>
      <Button variant="outlined"
        onClick={() => {
          alert('clicked');
        }}>
        9mm</Button>
    </>
  );
};




export default App
