import { Box } from '@mui/material';
import { height, width } from '@mui/system';
import React, { FunctionComponent, PureComponent, useState } from 'react';
import { ScatterChart, Scatter, XAxis, Line, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend, LabelList, ReferenceLine } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { getsvg } from './SvgData';
import { AmmoData, getAmmodata } from './TarkovApiService';
import './Chart.css'

const CustomTooltip = (args: TooltipProps<ValueType, NameType>) => {
  if (args.active) {
    //console.log(args)
    //payloadにargsにammoのデータが入っているところを入れる
    const payload: AmmoData = args.payload?.[0].payload;
    //payloadから簡単に取り出せるようになる
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <div className="custom-tooltip" >
          <img src={payload.iconLink}></img>
          <p className="label">{`${payload.name}`}</p>
          <p className="label">{`DMG:${payload.totalDamage}`}</p>
          <p className="desc">{`PENE:${payload.penetrationPower}`}</p>

        </div>
      </Box>
    );
  }

  return null;
};

const tooltipStyle = {
  backgroundColor: "blue",
  color: "white",
  fontSize: "14px",
};

const CustomizedDot = (props: any) => {
  const { cx, cy, stroke } = props;
  const dotsvg = getsvg(props.caliber)
  return (
    <svg
      x={cx - 12.5}
      y={cy - 12.5}
      width={50}
      height={50}
      viewBox='0 0 50 50'
    >

      <path
        d={dotsvg.shape}
        stroke={dotsvg.color}
        strokeWidth={dotsvg.width}>
      </path>
    </svg>
  )
}

type Props = {
  entries: AmmoData[];
};
//props.entriesを作っておくことで、Rootから入力を受け取れるようにする
const Ammochart = ({ entries }: Props) => {



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
        <CartesianGrid
          stroke="#fbd38d" //枠線のカラー変更
        />
        <Tooltip content={<CustomTooltip />} />
        <XAxis
          type="number"
          style={{ fontWeight: 'bold' }} //フォントのスタイルの設定
          stroke="#fbd38d"  //枠線のカラーの設定
          dataKey="totalDamage"
          name="stature"
          unit="DMG"
          tickCount={6}
          tickSize={6} />
        <YAxis
          type="number"
          style={{ fontWeight: 'bold' }} //フォントのスタイルの設定
          stroke="#fbd38d" //枠線のカラー適用
          dataKey="penetrationPower"
          name="weight"
          unit="pene"
          ticks={[10, 20, 30, 40, 50, 60]}
          tickCount={6}
          tickSize={6} />
        <ReferenceLine
          x="85"//ソーラックスのHP。仕様変更に応じて変化させること
          stroke="#fbd38d"
          label="Thorax"
          strokeDasharray={'3 3'} />
        <Scatter
          data={entries}
          fill="#8884d8"
          shape={<CustomizedDot />}
        >
          <LabelList
            dataKey="id"
            position='bottom'
            style={{ pointerEvents: 'none' }} />
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );//shape={<CustomizedDot />}
}

export default Ammochart;

//<Tooltip content={<this.CustomTooltip />} />はthis.をつけないと動かない。（本来は必要なさそう）