import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'name', width: 200 },
  { field: 'damage', headerName: 'Damage', width: 80},
  { field: 'penetration', headerName: 'Penetration', width: 100 },
  { field: 'armordmg', headerName: 'ArmorDMG', width: 100 },
  { field: 'accuracy', headerName: 'Accuracy', width: 100 },
  { field: 'recoil', headerName: 'Recoil', width: 80 },
  //{ field: 'fragmentchance', headerName: 'Fragmentchance', width: 130 },
  //{ field: 'ricochet', headerName: 'Ricochet', width: 100 },
  { field: 'lightbleed', headerName: 'LightBleed', width: 100 },
  { field: 'heavybleed', headerName: 'HeavyBleed', width: 100 },
  { field: 'special', headerName: 'Special', width: 200 }
];
//idを指定しないと動かない。本当はidの部分はnameとしたいがMUIデータグリッドには必ずidを指定しないといけない
export type TableEntry = {
  id : string;
  damage : number;
  penetration : number;
  armordmg : number;
  accuracy : number;
  recoil : number;
  fragmentchance : number;
  ricochet : number;
  lightbleed : number;
  heavybleed : number;
  special : string;

}

type Props = {
  entries : TableEntry[];
};

export default function DataTable(props:Props) {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={props.entries}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
