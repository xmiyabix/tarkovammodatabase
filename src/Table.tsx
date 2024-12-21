import * as React from "react";
import {
	DataGrid,
	GridColDef,
	GridValueGetterParams,
	GridCellParams,
} from "@mui/x-data-grid";
import clsx from "clsx";
import { Box } from "@mui/material";
import { AmmoData, getAmmodata, BuyEntry } from "./TarkovApiService";

const columns: GridColDef[] = [
	{
		field: "name",
		headerName: "name",
		flex: 1,
		maxWidth: 200,
		//オーバーライド
		//renderCellとは？セル単位でレンダリングを行うコンポーネント？関数？の一種。引数としてParamsを持っていて、そこから画像のパスを受け取っている。
		renderCell: (params) => {
			//console.log("renderTest",params)
			return (
				<div style={{ display: "flex", height: "100%" }}>
					<img
						src={params.row.iconLink}
						alt="image"
						style={{ height: "100%" }}
					/>
					<p style={{}}>{params.value}</p>
				</div>
			);
		},
	},
	//{ field: 'name', headerName: 'name', width: 200 },
	{
		field: "totalDamage",
		headerName: "Damage",
		flex: 1,
		maxWidth: 100,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "penetrationPower",
		headerName: "Penetration",
		flex: 1,
		maxWidth: 100,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "armorDamage",
		headerName: "ArmorDMG",
		flex: 1,
		maxWidth: 100,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "accuracyModifier",
		headerName: "Accuracy",
		flex: 1,
		maxWidth: 100,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "recoilModifier",
		headerName: "Recoil",
		flex: 1,
		maxWidth: 80,
		headerAlign: "center",
		align: "center",
	},
	//{ field: 'fragmentchance', headerName: 'Fragmentchance', width: 130 },
	//{ field: 'ricochet', headerName: 'Ricochet', width: 100 },
	{
		field: "lightBleedModifier",
		headerName: "LightBleed",
		flex: 1,
		maxWidth: 100,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "heavyBleedModifier",
		headerName: "HeavyBleed",
		flex: 1,
		maxWidth: 100,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "tracer",
		headerName: "tracer",
		flex: 1,
		maxWidth: 100,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "buy",
		headerName: "costs",
		flex: 1,
		maxWidth: 150,
		headerAlign: "center",
		sortComparator: (a: BuyEntry[], b: BuyEntry[]) => {
			if (a.length === 0) {
				return 999999;
			}
			if (b.length === 0) {
				return -1;
			}
			return a[0].priceRUB - b[0].priceRUB;
		},
		renderCell: (params) => {
			//console.log('buy', params.value[1].priceRUB)
			//まずは最初に入っている価格を取り出そうとした。うまくいかなった。
			if (0 < params.value.length) {
				return (
					<div style={{ display: "flex", height: "100%" }}>
						<p>{params.value[0].priceRUB}RUB:</p>
						<p>{params.value[0].name}</p>
					</div>
				);
			} else {
				return <p>NoSale</p>;
			}
			console.log(params.value[0].priceRUB);
		},
	},
];
//idを指定しないと動かない。本当はidの部分はnameとしたいがMUIデータグリッドには必ずidを指定しないといけない

type Props = {
	entries: AmmoData[]; //union型にすることにより、underfinedを許容している。
};
const styles = {
	grid: {
		// 列ヘッダに背景色を指定
		".MuiDataGrid-columnHeaders": {
			backgroundColor: "#212121",
			color: "#fff",
		},
		"& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
			{
				display: "none",
			},
	},
};
//参考 https://zenn.dev/ynakamura/articles/e562376735d398
export default function DataTable({ entries }: Props) {
	//
	return (
		//Box要素の中に条件を満たした時の見た目を入れている
		<Box
			sx={{
				height: 600,
				width: "100%",
				"& .normal": {
					//backgroundColor: '#ffffffff',
					//color: '#1a3e72',
				},
				"& .red": {
					//backgroundColor: '#ff943975',
					color: "#55ff0d",
				},
			}}
		>
			<DataGrid
				rows={entries}
				columns={columns}
				pageSize={15}
				rowsPerPageOptions={[5]}
				checkboxSelection
				sx={styles.grid}
				//条件式部
				//この条件式を満たす場合、セルの色を変える
				getCellClassName={(params: GridCellParams<number>) => {
					if (params.value != null && params.field === "totalDamage"!) {
						return params.value >= 85 ? "red" : "normal";
					}
					return "";
				}}
			/>
		</Box>
	);
}
