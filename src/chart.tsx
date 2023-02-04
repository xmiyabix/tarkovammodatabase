import React, { FunctionComponent, PureComponent, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend, LabelList } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { getAmmodata } from './ammodata';
import { AmmoDataEntry } from './Tabletest';

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

const CostomizedDot: FunctionComponent<any> = (props: any) => {
  
  const { cx, cy, value } = props;
  return (
    <svg
      x={cx-12.5}
      y={cy-12.5}
      width={50}
      height={50}
    >
      
      <path 
      d={props.entries.dotsvg.shape} 
      stroke={props.entries.dotsvg.color} 
      strokeWidth={props.entries.dotsvg.width}></path>
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
        <XAxis type="number" dataKey="damage" name="stature" unit="DMG" tickCount={6} tickSize={6} />
        <YAxis type="number" dataKey="penetration" name="weight" unit="pene" ticks={[10, 20, 30, 40, 50, 60]} tickCount={6} tickSize={6} />
        <Scatter data={props.entries} fill="#8884d8" shape={<CostomizedDot/>}>
          <LabelList dataKey="id" position='bottom' />
        </Scatter>
        <Tooltip content={<CustomTooltip />} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default Ammochart;

//<Tooltip content={<this.CustomTooltip />} />はthis.をつけないと動かない。（本来は必要なさそう）