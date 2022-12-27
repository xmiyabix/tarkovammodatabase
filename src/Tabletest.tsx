import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'damage', headerName: 'damage', width: 130 }
];

export type TableEntry = {
  id : number;
  name : string;
  damage : number;
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
