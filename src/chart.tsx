import React, { PureComponent, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend ,LabelList} from 'recharts';
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
const Ammochart = (props:Props)=>{
  return (
    //Width９９％に設定するとresizeされるようになる？なぜ？
    //上の件で参考にしたサイトhttps://stackoverflow.com/questions/50891591/recharts-responsive-container-does-not-resize-correctly-in-flexbox
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="damage" name="stature" unit="DMG"  tickCount={6} tickSize={6}/>
        <YAxis type="number" dataKey="penetration" name="weight" unit="pene"ticks={[10,20,30,40,50,60]} tickCount={6} tickSize={6} />
        <Scatter name="A school" data={props.entries} fill="#8884d8" >
          <LabelList dataKey="id" position='bottom'/>
        </Scatter>
        <Tooltip content={<CustomTooltip />} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default Ammochart;

//<Tooltip content={<this.CustomTooltip />} />はthis.をつけないと動かない。（本来は必要なさそう）