import { Button } from "@mui/material";
import React, { useState } from 'react';
import {getAmmodata}  from './ammodata';
import Tabletest, { TableEntry } from './Tabletest'

const Buttons = () => {
    const [ammodata, setAmmodata] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
    return (
      <>
        Pistol Ammos
        <br/>
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

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*21']
            setAmmodata(getAmmodata(tmpname));
            }}>
            9×21mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['4.6*30']
            setAmmodata(getAmmodata(tmpname));
            }}>
            4.6×30mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['5.7*28']
            setAmmodata(getAmmodata(tmpname));
            }}>
            5.7×28mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['357magnum']
            setAmmodata(getAmmodata(tmpname));
            }}>
            357Magnum</Button>
            <br/>
            RifleAmmos
            <br/>
            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['5.45*39']
            setAmmodata(getAmmodata(tmpname));
            }}>
            5.45×39mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['5.56*45']
            setAmmodata(getAmmodata(tmpname));
            }}>
            5.56×45mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['7.62*39']
            setAmmodata(getAmmodata(tmpname));
            }}>
            7.62×39mm</Button>
            
            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['7.62*51']
            setAmmodata(getAmmodata(tmpname));
            }}>
            7.62×51mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['366tkm']
            setAmmodata(getAmmodata(tmpname));
            }}>
            366TKM</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['7.62*51']
            setAmmodata(getAmmodata(tmpname));
            }}>
            7.62×51mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*39']
            setAmmodata(getAmmodata(tmpname));
            }}>
            9×39mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['300blackout']
            setAmmodata(getAmmodata(tmpname));
            }}>
            300Blackout</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['12.7*55']
            setAmmodata(getAmmodata(tmpname));
            }}>
            12.7×55mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['338lapua']
            setAmmodata(getAmmodata(tmpname));
            }}>
            338lapua</Button>

            <br/>
            ShotgunAmmos
            <br/>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['12gauge']
            setAmmodata(getAmmodata(tmpname));
            }}>
            12gauge</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['20gauge']
            setAmmodata(getAmmodata(tmpname));
            }}>
            20gauge</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['8gauge']
            setAmmodata(getAmmodata(tmpname));
            }}>
            8gauge</Button>

            <Tabletest entries={ammodata} />
            
      </>
    );
  };
  
  
  
  
  export default Buttons
  