import { Button, ToggleButton, Typography, ToggleButtonGroup } from "@mui/material";
import React, { useState } from 'react';
import { getAmmodata, PistolAmmos } from './AmmoData';
import { AmmoDataEntry } from './AmmoData'
import CheckIcon from '@mui/icons-material/Check';
import { } from './TarkovApiService';

type Props = {
  applyAmmoData: (entries: AmmoDataEntry[]) => void;
}

const Buttons = (props: Props) => {

  //ammoIdという変数に入れるために、setAmmoIdという関数を呼び出す
  const [ammoId, setAmmoId] = React.useState(() => ['9x19mm']);
  const handleChange = (
    //React.MouseEventを入れることで、handleChangeで求められている引数を満たしている（なお、実際には機能としては使っていない）
    //あくまでサンプルコードそのものである。（実際に自前で書いたとしてもいるので忘れないこと。）
    event: React.MouseEvent<HTMLElement>,
    //弾丸の名前を渡す
    selected: string[],
  ) => {
    //propsでdataを変更するためのhandleが渡される
    //.は取り出す物の指定。()は関数を呼び出す
    props.applyAmmoData(getAmmodata(selected))
    setAmmoId(selected);
  };
  const ToggleButtonWithSVG = (
    ammoName: string,
  ) => {
    /*{
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
            <path d={svg.shape} stroke="#fff" stroke-width="2" stroke-linecap="round" />
          </svg>
    }//*/

    return (
      <ToggleButton value={ammoName}>{ammoName}
        
      </ToggleButton>
    )
  }

  const res = []
  for (const ammo in PistolAmmos) {
    res.push(ToggleButtonWithSVG(ammo))
  }

  return (
    <>
      <Typography variant="h6" align="left" color='text.primary' gutterBottom>
        Pistol Ammos
      </Typography>

      <ToggleButtonGroup
        style={{ flexWrap: "wrap" }}
        size="small"
        value={ammoId}
        onChange={handleChange}
        aria-label="text formatting"
      >

        <ToggleButton value="9x19mm">9×19mm
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
            <path d={getAmmodata(["9x19mm"])[0].dotsvg?.shape} stroke="#fff" stroke-width="2" stroke-linecap="round" />
          </svg>
        </ToggleButton>
        <Button></Button>
        {PistolAmmos.map(ammo => ToggleButtonWithSVG(ammo))}
        <ToggleButton value="9*18">9×18mm</ToggleButton>
        <ToggleButton value="7.62*25">7.62×25mmTT</ToggleButton>
        <ToggleButton value="45acp">45ACP</ToggleButton>
        <ToggleButton value="9*21">9×21mm</ToggleButton>
        <ToggleButton value="4.6*30">4.6×30mm</ToggleButton>
        <ToggleButton value="5.7*28">5.7×28mm</ToggleButton>
        <ToggleButton value="357magnum">357Magnum</ToggleButton>

      </ToggleButtonGroup>
      <br />
      <Typography variant="h6" align="left" color='text.primary' gutterBottom>
        RifleAmmos
      </Typography>
      <ToggleButtonGroup
        style={{ flexWrap: "wrap" }}
        size="small"
        value={ammoId}
        onChange={handleChange}
        aria-label="text formatting"
      >
        <ToggleButton value="5.45*39">5.45×39mm</ToggleButton>
        <ToggleButton value="5.56*45">5.56×45mm</ToggleButton>
        <ToggleButton value="7.62*39">7.62×39mm</ToggleButton>
        <ToggleButton value="7.62*51">7.62×51mm</ToggleButton>
        <ToggleButton value="366tkm">366TKM</ToggleButton>
        <ToggleButton value="7.62*54r">7.62×54Rmm</ToggleButton>
        <ToggleButton value="9*39">9×39mm</ToggleButton>
        <ToggleButton value="300blackout">300Blackout</ToggleButton>
        <ToggleButton value="12.7*55">12.7×55mm</ToggleButton>
        <ToggleButton value="338lapua">338lapua</ToggleButton>
      </ToggleButtonGroup>
      <br />
      <Typography variant="h6" align="left" color='text.primary' gutterBottom>
        ShotgunAmmos
      </Typography>
      <ToggleButtonGroup
        style={{ flexWrap: "wrap" }}
        size="small"
        value={ammoId}
        onChange={handleChange}
        aria-label="text formatting"
      >
        <ToggleButton value="12gauge">12gauge</ToggleButton>
        <ToggleButton value="20gauge">20gauge</ToggleButton>
        <ToggleButton value="8gauge">8gauge</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};




export default Buttons
