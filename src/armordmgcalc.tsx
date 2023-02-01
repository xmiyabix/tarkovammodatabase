import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Button } from "@mui/material";
import React from 'react';
import { SettingsCellOutlined } from '@mui/icons-material';
import { AmmoDataEntry as AmmoDataEntry } from './Tabletest';




type Props = {
    Testvalue:number;
    entries : AmmoDataEntry|undefined;
};
//アーマーのデータ＋球のデータで計算を行う
const Armordmgcalc = (props: Props) => {
    const[dmg,setDmg]=React.useState(0);
    
    function test_counter(){
      if(props.entries==undefined){
        return//retrunはその時点でFunctionから抜ける
      }
      const ammoData = props.entries!
      var tmp:number = 0;

      tmp = dmg + props.Testvalue+ammoData.armordmg;
      setDmg(tmp);
    }

  return (
    <button onClick={test_counter}>count is;{dmg}</button>
  );
};




export default Armordmgcalc