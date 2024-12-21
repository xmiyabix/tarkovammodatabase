import { FormatAlignJustify, Margin } from "@mui/icons-material";
import {
	Button,
	ToggleButton,
	Typography,
	ToggleButtonGroup,
	Box,
} from "@mui/material";
import React, { useState } from "react";
import { getsvg } from "./svgdata";
import { AmmoCateMap, AmmoData, getAmmodata } from "./TarkovApiService";

type Props = {
	applyAmmoData: (entries: AmmoData[]) => void;
};

const Buttons = (props: Props) => {
	//ammoIdという変数に入れるために、setAmmoIdという関数を呼び出す
	const [ammoId, setAmmoId] = React.useState(() => ["9x19mm"]);
	const handleChange = (
		//React.MouseEventを入れることで、handleChangeで求められている引数を満たしている（なお、実際には機能としては使っていない）
		//あくまでサンプルコードそのものである。（実際に自前で書いたとしてもいるので忘れないこと。）
		event: React.MouseEvent<HTMLElement>,
		//弾丸の名前を渡す
		selected: string[],
	) => {
		//propsでdataを変更するためのhandleが渡される
		//.は取り出す物の指定。()は関数を呼び出す
		props.applyAmmoData(getAmmodata(selected));
		setAmmoId(selected);
	};

	const buttonArr: JSX.Element[] = [];
	AmmoCateMap.forEach((array, cate) => {
		buttonArr.push(
			<>
				<Typography variant="h6" align="left" color="text.primary" gutterBottom>
					{cate}
				</Typography>
				<ToggleButtonGroup
					style={{ flexWrap: "wrap" }}
					size="small"
					value={ammoId}
					onChange={handleChange}
					aria-label="text formatting"
				>
					{array.map((ammo) => {
						const svg = getsvg(ammo);

						return (
							<ToggleButton value={ammo}>
								<svg viewBox="0 0 24 24" width="24" height="24">
									<path
										d={svg.shape}
										stroke={svg.color}
										stroke-width={svg.width}
										stroke-linecap="round"
										color={svg.color}
									/>
								</svg>

								{ammo}
							</ToggleButton>
						);
					})}
				</ToggleButtonGroup>
			</>,
		);
	});

	return <>{buttonArr}</>;
};

export default Buttons;
