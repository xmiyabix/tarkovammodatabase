import React, { PureComponent, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { getAmmodata } from './ammodata';
import { TableEntry } from './Tabletest';
const data = [
  { r: 100, g: 200, b: 200 },
  { r: 120, g: 100, b: 260 },
  { r: 170, g: 300, b: 400 },
  { r: 140, g: 250, b: 280 },
  { r: 150, g: 400, b: 500 },
  { r: 110, g: 280, b: 200 },
];

const [ammodata, setAmmodata] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
const CustomTooltip = ({
  active,
  payload,
  label,
  //ーTypeにすることで、さまざまな変数型でも受け取るようになる（オブジェクト型）
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload?.[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

const tmpname :string[] = ['9*19']
setAmmodata(getAmmodata(tmpname));

type Props = {
  entries : TableEntry[];
};
export default class Example extends PureComponent {
  //static demoUrl = 'https://codesandbox.io/s/simple-scatter-chart-edeu2s';

  render() {
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
          <XAxis type="number" dataKey="x" name="stature" unit="pene" />
          <YAxis type="number" dataKey="y" name="weight" unit="DMG" />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={props} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
//<Tooltip content={<this.CustomTooltip />} />はthis.をつけないと動かない。（本来は必要なさそう）