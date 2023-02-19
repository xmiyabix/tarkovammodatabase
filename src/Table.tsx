import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { AmmoData,getAmmodata} from './TarkovApiService';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'name', width: 200 ,
    //オーバーライド
    //renderCellとは？セル単位でレンダリングを行うコンポーネント？関数？の一種。引数としてParamsを持っていて、そこから画像のパスを受け取っている。
    renderCell: (params) => {
      //console.log("renderTest",params)
      return(
        <div>
          <img src={params.row.iconLink} alt="image" style={{ height: "100%" }} />
          <p style={{}}>{params.value}</p>
        </div>
        
    )}},
  //{ field: 'name', headerName: 'name', width: 200 },
  { field: 'totalDamage', headerName: 'Damage', width: 80 },
  { field: 'penetrationPower', headerName: 'Penetration', width: 100 },
  { field: 'armorDamage', headerName: 'ArmorDMG', width: 100 },
  { field: 'accuracyModifier', headerName: 'Accuracy', width: 100 },
  { field: 'recoilModifier', headerName: 'Recoil', width: 80 },
  //{ field: 'fragmentchance', headerName: 'Fragmentchance', width: 130 },
  //{ field: 'ricochet', headerName: 'Ricochet', width: 100 },
  { field: 'lightBleedModifier', headerName: 'LightBleed', width: 100 },
  { field: 'heavyBleedModifier', headerName: 'HeavyBleed', width: 100 },
  { field: 'tracer', headerName: 'tracer', width: 200 }
];
//idを指定しないと動かない。本当はidの部分はnameとしたいがMUIデータグリッドには必ずidを指定しないといけない


type Props = {
  entries: AmmoData[];//union型にすることにより、underfinedを許容している。
};
//参考 https://zenn.dev/ynakamura/articles/e562376735d398
export default function DataTable({ entries }: Props) //
{
  return (
    //Box要素の中に条件を満たした時の見た目を入れている
    <Box
      sx={{
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
        rows={entries}
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
