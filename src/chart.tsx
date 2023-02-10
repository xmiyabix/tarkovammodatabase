import React, { FunctionComponent, PureComponent, useState } from 'react';
import { ScatterChart, Scatter, XAxis,Line, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend, LabelList } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { getAmmodata } from './ammodata';
import {AmmoDataEntry,SVG} from './ammodata'

const CustomTooltip = (args: TooltipProps<ValueType, NameType>) => {
  if (args.active) {
    //console.log(args)
    //payloadにargsにammoのデータが入っているところを入れる
    const payload: AmmoDataEntry = args.payload?.[0].payload;
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

const CustomizedDot = (props:any) => {
  console.log(props)
  const { cx, cy, stroke, dotsvg } = props;
  return (
    <svg
      x={cx-12.5}
      y={cy-12.5}
      width = {50}
      height ={50}
      viewBox='0 0 50 50'
    >
      
      <path 
      d={dotsvg.shape} 
      stroke={dotsvg.color} 
      strokeWidth={dotsvg.width}></path>
    </svg>
  )
}



type Props = {
  entries: AmmoDataEntry[];
};
//props.entriesを作っておくことで、Rootから入力を受け取れるようにする
const Ammochart = (props: Props) => {
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
        <Tooltip content={<CustomTooltip />} />
        <XAxis type="number"  stroke="#fbd38d"  dataKey="damage" name="stature" unit="DMG" tickCount={6} tickSize={6} />
        <YAxis type="number"  stroke="#fbd38d" dataKey="penetration" name="weight" unit="pene" ticks={[10, 20, 30, 40, 50, 60]} tickCount={6} tickSize={6} />
        <Scatter data={props.entries}   fill="#fbd38d" shape={<CustomizedDot/>}>
          <LabelList dataKey="id" position='bottom' />
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default Ammochart;

//<Tooltip content={<this.CustomTooltip />} />はthis.をつけないと動かない。（本来は必要なさそう）