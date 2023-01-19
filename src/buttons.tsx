import { Button } from "@mui/material";
import React, { useState } from 'react';
import {getAmmodata}  from './ammodata';
import Tabletest, { TableEntry } from './Tabletest'

type Props={
  applyAmmoData:(entries:TableEntry[])=>void;
}

const Buttons = (props:Props) => {
    //const [ammodata, props.applyAmmoData] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
    return (
      <>
        Pistol Ammos
        <br/>
        <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*19']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            9×19mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*18']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            9×18mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['7.62*25']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            7.62×25mmTT</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['45acp']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            45ACP</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*21']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            9×21mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['4.6*30']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            4.6×30mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['5.7*28']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            5.7×28mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['357magnum']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            357Magnum</Button>
            <br/>
            RifleAmmos
            <br/>
            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['5.45*39']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            5.45×39mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['5.56*45']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            5.56×45mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['7.62*39']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            7.62×39mm</Button>
            
            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['7.62*51']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            7.62×51mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['366tkm']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            366TKM</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['7.62*54r']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            7.62×54Rmm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*39']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            9×39mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['300blackout']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            300Blackout</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['12.7*55']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            12.7×55mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['338lapua']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            338lapua</Button>

            <br/>
            ShotgunAmmos
            <br/>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['12gauge']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            12gauge</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['20gauge']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            20gauge</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['8gauge']
            props.applyAmmoData(getAmmodata(tmpname));
            }}>
            8gauge</Button>

            
            
      </>
    );
  };
  
  
  
  
  export default Buttons
  