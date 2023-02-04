import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams,GridCellParams } from '@mui/x-data-grid';
import clsx from 'clsx';
import { Box } from '@mui/material';

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
export type AmmoDataEntry = {
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
  iconsvg?: {
    shape:string;
    color:string;
    width:number;
  };

}

type Props = {
  entries : AmmoDataEntry[];
};

export default function DataTable(props:Props) {
  return (
    //Box要素の中に条件を満たした時の見た目を入れている
    <Box
      sx = {{
        height: 600,
        width: '100%',
        '& .cold': {
          //backgroundColor: '#ffffffff',
          //color: '#1a3e72',
        },
        '& .hot': {
          //backgroundColor: '#ff943975',
          color: 'Red',
        },
      }}
      >
      <DataGrid
        rows={props.entries}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
        //条件式部
        //この条件式を満たす場合、セルの色を変える
        getCellClassName={(params: GridCellParams<number>) => {
          if (params.value != null && params.field === 'damage'!) {
            return params.value >= 85 ? 'hot' : 'cold';
          }
          return '';
        }}
      />
      </Box>
  );
}
