import { AllCalibers } from "./TarkovApiService"

//SVGのデータ型
export type SVG = {
  shape: string;
  color: string;
  width: number;
};

const calibersvgMap = new Map<string, SVG>();

//名前を与えられたら対応するsvgを返す
export function getsvg(name: string):SVG {
  if (calibersvgMap.has(name))
    return calibersvgMap.get(name)!
  return (DefaultSVG)
}

const DefaultSVG = { shape: 'M19 6L6 19M6 6l13 13',fill:'#fff', color: '#fff', width: 2 }
//"M60 40a10 10 0 0 0-20 0 10 10 0 0 0 20 0zM50 70a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"
calibersvgMap.set("name", { shape: 'M19 6L6 19M6 6l13 13', color: '#fff', width: 2 })

//対応するsvgのセット（WIP）
/*
calibersvgMap.set( "5.56x45mm",),
calibersvgMap.set( "12Gauge",),
calibersvgMap.set( "7.62x54mmR",),
calibersvgMap.set( "7.62x39mm",),
calibersvgMap.set( "9x19mm",),
calibersvgMap.set( "5.45x39mm",),
calibersvgMap.set( "7.62x25mmTT",),
calibersvgMap.set( "9x18mmPM",),
calibersvgMap.set( "9x39mm",),
calibersvgMap.set( "762x51mm",),
calibersvgMap.set( ".366TKM",),
calibersvgMap.set( "9x21mm",),
calibersvgMap.set( "20Gauge",),
calibersvgMap.set( "4.6x30mm",),
calibersvgMap.set( "12.7x55mm",),
calibersvgMap.set( "5.7x28mm",),
calibersvgMap.set( ".45ACP",),
calibersvgMap.set( "23x75mm",),
calibersvgMap.set( "40x46mm",),
calibersvgMap.set( ".300Blackout",),
calibersvgMap.set( ".338Lapua",),
calibersvgMap.set( ".357Magnum",),
//*/
//エラー検知
AllCalibers.forEach(cal => {
  if (!calibersvgMap.has(cal)) {
    console.error("svg not registerd", cal)
  }
})