import React, { PureComponent, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { getAmmodata } from './ammodata';
import { TableEntry } from './Tabletest';
const data = [
  { id: '9x19mm AP 6.3', damage: 52, penetration: 30, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 5, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 392, special: 'none' },
  { id: '9x19mm Green Tracer', damage: 58, penetration: 14, armordmg: 3, accuracy: -5, recoil: -6, fragmentchance: 15, ricochet: 5, lightbleed: 0, heavybleed: 0, projectilespeed: 365, special: 'Tracer (green)' },
  { id: '9x19mm Luger CCI', damage: 70, penetration: 10, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 20, heavybleed: 20, projectilespeed: 420, special: 'none' },
  { id: '9x19mm PBP gzh', damage: 52, penetration: 39, armordmg: 3, accuracy: 15, recoil: 15, fragmentchance: 5, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 560, special: 'none' },
  { id: '9x19mm PSO gzh', damage: 59, penetration: 10, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 0, heavybleed: 0, projectilespeed: 340, special: 'Subsonic' },
  { id: '9x19mm Pst gzh', damage: 54, penetration: 20, armordmg: 3, accuracy: 0, recoil: 0, fragmentchance: 15, ricochet: 5, lightbleed: 0, heavybleed: 0, projectilespeed: 457, special: 'none' },
  { id: '9x19mm QuakeMaker', damage: 85, penetration: 8, armordmg: 2, accuracy: 10, recoil: 10, fragmentchance: 10, ricochet: 10, lightbleed: 15, heavybleed: 22, projectilespeed: 290, special: 'Subsonic' },
  { id: '9x19mm RIP', damage: 102, penetration: 2, armordmg: 1, accuracy: 0, recoil: 20, fragmentchance: 100, ricochet: 0.20, lightbleed: 30, heavybleed: 10, projectilespeed: 381, special: 'none' }
];

//const [ammodata, setAmmodata] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
const CustomTooltip = (args: TooltipProps<ValueType, NameType>) => {
  if (args.active) {
    console.log(args)

    const payload : TableEntry = args.payload?.[0].payload;

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

const tmpname :string[] = ['9*19']
//setAmmodata(getAmmodata(tmpname));

type Props = {
  entries : TableEntry[];
};

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
        <XAxis type="number" dataKey="damage" name="stature" unit="DMG" />
        <YAxis type="number" dataKey="penetration" name="weight" unit="pene" />
        <Tooltip content={<CustomTooltip />} />
        <Scatter name="A school" data={props.entries} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default Example2;

//<Tooltip content={<this.CustomTooltip />} />はthis.をつけないと動かない。（本来は必要なさそう）