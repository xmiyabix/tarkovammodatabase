import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'name', width: 70 },
  { field: 'damage', headerName: 'Damage', width: 130 },
  { field: 'penetration', headerName: 'Penetration', width: 130 },
  { field: 'armordmg', headerName: 'ArmorDMG', width: 130 },
  { field: 'accuracy', headerName: 'accuracy', width: 130 },
  { field: 'recoil', headerName: 'recoil', width: 130 },
  { field: 'lightbleed', headerName: 'LightBleed', width: 130 },
  { field: 'heavybleed', headerName: 'HeavyBleed', width: 130 }
];
//idを指定しないと動かない。本当はidの部分はnameとしたいがMUIデータグリッドには必ずidを指定しないといけない
export type TableEntry = {
  id : string;
  damage : number;
  penetration : number;
  armordmg : number;
  accuracy : number;
  recoil : number;
  lightbleed : number;
  heavybleed : number;
}

type Props = {
  entries : TableEntry[];
};

export default function DataTable(props:Props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.entries}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
