import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Button } from "@mui/material";
import React from 'react';
import { SettingsCellOutlined } from '@mui/icons-material';




type Props = {
    Testvalue:number;
};

const Armordmgcalc = (props: Props) => {
    const[dmg,setDmg]=React.useState(0);

    function test_counter(){
        setDmg(props.Testvalue);
    }

  return (
    <button onClick={test_counter}>count is;{dmg}</button>
  );
};




export default Armordmgcalc