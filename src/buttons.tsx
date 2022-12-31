import { Button } from "@mui/material";
import React, { useState } from 'react';
import {getAmmodata}  from './ammodata';
import Tabletest, { TableEntry } from './Tabletest'

const Buttons = () => {
    const [ammodata, setAmmodata] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
    return (
      <>
        <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*19']
            setAmmodata(getAmmodata(tmpname));
            }}>
            9×19mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*18']
            setAmmodata(getAmmodata(tmpname));
            }}>
            9×18mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['7.62*25']
            setAmmodata(getAmmodata(tmpname));
            }}>
            7.62×25mmTT</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['45acp']
            setAmmodata(getAmmodata(tmpname));
            }}>
            45ACP</Button>
            <Tabletest entries={ammodata} />
      </>
    );
  };
  
  
  
  
  export default Buttons
  