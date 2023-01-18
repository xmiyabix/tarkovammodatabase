import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

export default class Example extends PureComponent {
  //static demoUrl = 'https://codesandbox.io/s/simple-scatter-chart-edeu2s';


  CustomTooltip = ({//const CustomTooltipだとエラーがでるのでConst外した
    active,
    payload,
    label,
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
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip content={<this.CustomTooltip />} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
//<Tooltip content={<this.CustomTooltip />} />はthis.をつけないと動かない。（本来は必要なさそう）