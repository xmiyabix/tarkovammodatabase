import React, { PureComponent, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { getAmmodata } from './ammodata';
import { TableEntry } from './Tabletest';

const CustomTooltip = (args: TooltipProps<ValueType, NameType>) => {
  if (args.active) {
    //console.log(args)
    //payloadにargsにammoのデータが入っているところを入れる
    const payload : TableEntry = args.payload?.[0].payload;
    //payloadから簡単に取り出せるようになる
    return (
      <div className="custom-tooltip">
        
        <p className="label">{`NAME:${payload.id}`}</p>
        <p className="label">{`DMG:${payload.damage}`}</p>
        <p className="desc">{`PENE:${payload.penetration}`}</p>
      </div>
    );
  }

  return null;
};


type Props = {
  entries : TableEntry[];
};
//props.entriesを作っておくことで、Rootから入力を受け取れるようにする
const Example2 = (props:Props)=>{
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="damage" name="stature" unit="DMG" ticks={[20,40,60,80,100,120,140]} />
        <YAxis type="number" dataKey="penetration" name="weight" unit="pene"ticks={[10,20,30,40,50,60]} />
        <Tooltip content={<CustomTooltip />} />
        <Scatter name="A school" data={props.entries} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default Example2;

//<Tooltip content={<this.CustomTooltip />} />はthis.をつけないと動かない。（本来は必要なさそう）