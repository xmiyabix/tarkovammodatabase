import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Button } from "@mui/material";
import React from "react";
import { SettingsCellOutlined } from "@mui/icons-material";
import { AmmoDataEntry } from "../old/AmmoData";

type Props = {
	Testvalue: number;
	entries: AmmoDataEntry | undefined; //|undefinedを付けることによりunderfinedを許容している。
};
//アーマーのデータ＋球のデータで計算を行う
const Armordmgcalc = (props: Props) => {
	const [dmg, setDmg] = React.useState(0);

	function test_counter() {
		if (props.entries == undefined) {
			return; //retrunはその時点でFunctionから抜ける
		}
		const ammoData = props.entries!;
		var tmp: number = 0;

		tmp = dmg + props.Testvalue + ammoData.armordmg;
		setDmg(tmp);
	}

	return <button onClick={test_counter}>count is;{dmg}</button>;
};

export default Armordmgcalc;
