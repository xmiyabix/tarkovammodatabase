import { AllCalibers } from "./TarkovApiService";

//SVGのデータ型
export type SVG = {
	shape: string;
	color: string;
	width: number;
};

const calibersvgMap = new Map<string, SVG>();

//名前を与えられたら対応するsvgを返す
export function getsvg(name: string): SVG {
	if (calibersvgMap.has(name)) return calibersvgMap.get(name)!;
	return DefaultSVG;
}

const DefaultSVG = {
	shape: "M19 6L6 19M6 6l13 13",
	fill: "#fff",
	color: "#fff",
	width: 2,
};
//"M60 40a10 10 0 0 0-20 0 10 10 0 0 0 20 0zM50 70a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"
calibersvgMap.set("name", {
	shape: "M19 6L6 19M6 6l13 13",
	color: "#fff",
	width: 2,
});

//対応するsvgのセット（WIP）M 50 10 L 90 90 L 10 90
calibersvgMap.set("9x19mm", {
	shape: "M19 6L6 19M6 6l13 13",
	color: "#fff",
	width: 2,
}), //WhiteCross
	calibersvgMap.set("7.62x25mmTT", {
		shape: "M19 6L6 19M6 6l13 13",
		color: "#00ffff",
		width: 2,
	}), //CyanCross
	calibersvgMap.set("9x18mmPM", {
		shape: "M19 6L6 19M6 6l13 13",
		color: "#4169e1",
		width: 2,
	}), //BlueCross
	calibersvgMap.set("9x21mm", {
		shape: "M19 6L6 19M6 6l13 13",
		color: "#00ff00",
		width: 2,
	}), //GreenCross
	calibersvgMap.set(".45ACP", {
		shape: "M19 6L6 19M6 6l13 13",
		color: "#ffff00",
		width: 2,
	}), //YellowCross
	calibersvgMap.set(".357Magnum", {
		shape: "M19 6L6 19M6 6l13 13",
		color: "#ffa500",
		width: 2,
	}), //OrangeOrangeCross
	calibersvgMap.set("5.56x45mm", {
		shape: "M 12.5 4.5 L 20.5 12.5 L 12.5 20.5 L 4.5 12.5 Z",
		color: "#fff",
		width: 2,
	}), //WhiteDiamond
	calibersvgMap.set("762x51mm", {
		shape: "M 12.5 4.5 L 20.5 12.5 L 12.5 20.5 L 4.5 12.5 Z",
		color: "#00ffff",
		width: 2,
	}), //CyanDiamond
	calibersvgMap.set(".300Blackout", {
		shape: "M 12.5 4.5 L 20.5 12.5 L 12.5 20.5 L 4.5 12.5 Z",
		color: "#4169e1",
		width: 2,
	}), //BlueDiamond
	calibersvgMap.set(".338Lapua", {
		shape: "M 12.5 4.5 L 20.5 12.5 L 12.5 20.5 L 4.5 12.5 Z",
		color: "#ffff00",
		width: 2,
	}), //YellowDiamond
	//M 8.625 1.375 L 17.125 7.375 L 14.375 16.375 L 5.625 16.375 L 2.875 7.375 Z
	calibersvgMap.set("5.45x39mm", {
		shape:
			"M 5.375 5.375 L 5.375 18.125 L 18.125 18.125 L 18.125 5.375 L 5.375 5.375",
		color: "#fff",
		width: 2,
	}), //WhiteBox
	calibersvgMap.set("7.62x39mm", {
		shape:
			"M 5.375 5.375 L 5.375 18.125 L 18.125 18.125 L 18.125 5.375 L 5.375 5.375",
		color: "#00ffff",
		width: 2,
	}), //CyanBox
	calibersvgMap.set("7.62x54mmR", {
		shape:
			"M 5.375 5.375 L 5.375 18.125 L 18.125 18.125 L 18.125 5.375 L 5.375 5.375",
		color: "#ffff00",
		width: 2,
	}), //YellowBox
	calibersvgMap.set("9x39mm", {
		shape:
			"M 5.375 5.375 L 5.375 18.125 L 18.125 18.125 L 18.125 5.375 L 5.375 5.375",
		color: "#00ff00",
		width: 2,
	}), //GreeenBox
	calibersvgMap.set("12.7x55mm", {
		shape:
			"M 5.375 5.375 L 5.375 18.125 L 18.125 18.125 L 18.125 5.375 L 5.375 5.375",
		color: "#4169e1",
		width: 2,
	}), //BlueBox
	calibersvgMap.set("12Gauge", {
		shape:
			"M 15.657 7 L 19.314 10.657 L 19.314 15.343 L 15.657 19 L 10.971 19 L 7.314 15.343 L 7.314 10.657 L 10.971 7 L 15.657 7 Z",
		color: "#fff",
		width: 2,
	}),
	calibersvgMap.set("20Gauge", {
		shape:
			"M 15.657 7 L 19.314 10.657 L 19.314 15.343 L 15.657 19 L 10.971 19 L 7.314 15.343 L 7.314 10.657 L 10.971 7 L 15.657 7 Z",
		color: "#00ffff",
		width: 2,
	}),
	calibersvgMap.set("23x75mm", {
		shape:
			"M 15.657 7 L 19.314 10.657 L 19.314 15.343 L 15.657 19 L 10.971 19 L 7.314 15.343 L 7.314 10.657 L 10.971 7 L 15.657 7 Z",
		color: "#4169e1",
		width: 2,
	}),
	calibersvgMap.set(".366TKM", {
		shape:
			"M 15.657 7 L 19.314 10.657 L 19.314 15.343 L 15.657 19 L 10.971 19 L 7.314 15.343 L 7.314 10.657 L 10.971 7 L 15.657 7 Z",
		color: "#ffff00",
		width: 2,
	}),
	//M 15 5 L 15 35 M 5 15 L 35 15
	calibersvgMap.set("4.6x30mm", {
		shape: "M19 6L6 19M6 6l13 13",
		color: "#ff69b4",
		width: 2,
	}),
	calibersvgMap.set("5.7x28mm", {
		shape: "M19 6L6 19M6 6l13 13",
		color: "#eee8aa",
		width: 2,
	}),
	/*
  calibersvgMap.set( "40x46mm",),
  //*/
	//エラー検知
	AllCalibers.forEach((cal) => {
		if (!calibersvgMap.has(cal)) {
			console.error("svg not registerd", cal);
		}
	});
