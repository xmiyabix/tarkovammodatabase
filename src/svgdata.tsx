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

//対応するsvgのセット（WIP）M 50 10 L 90 90 L 10 90
calibersvgMap.set( "9x19mm",{ shape: 'M19 6L6 19M6 6l13 13', color: '#fff', width: 2 }),//WhiteCross
calibersvgMap.set( "7.62x25mmTT",{ shape: 'M19 6L6 19M6 6l13 13', color: '#00ffff', width: 2 }), //CyanCross
calibersvgMap.set( "9x18mmPM",{ shape: 'M19 6L6 19M6 6l13 13', color: '#4169e1', width: 2 }),//BlueCross
calibersvgMap.set( "9x21mm",{ shape: 'M19 6L6 19M6 6l13 13', color: '#00ff00', width: 2 }),//GreenCross
calibersvgMap.set( ".45ACP",{ shape: 'M19 6L6 19M6 6l13 13', color: '#ffff00', width: 2 }),//YellowCross
calibersvgMap.set( ".357Magnum",{ shape: 'M19 6L6 19M6 6l13 13', color: '#ffa500', width: 2 }),//OrangeOrangeCross
calibersvgMap.set( "5.56x45mm",{ shape: 'M 50 10 L 90 90 L 10 90 Z', color: '#fff', width: 2 }),//WhiteDelta
calibersvgMap.set( "762x51mm",{ shape: 'M 25 5 L 45 45 L 5 45 Z', color: '#00ffff', width: 2 }),//CyanDelta
calibersvgMap.set( ".300Blackout",{ shape: 'M 50 10 L 90 90 L 10 90 Z', color: '#4169e1', width: 2 }),//BlueDelta
calibersvgMap.set( ".338Lapua",{ shape: 'M 50 10 A 40 40 0 1 0 50 90A 40 40 0 1 0 50 10Z', color: '#ffff00', width: 2 }),//YellowDelta
/*
calibersvgMap.set( "5.45x39mm",),
calibersvgMap.set( "12Gauge",),
calibersvgMap.set( "7.62x54mmR",),
calibersvgMap.set( "7.62x39mm",),
calibersvgMap.set( "9x39mm",),
calibersvgMap.set( ".366TKM",),
calibersvgMap.set( "20Gauge",),
calibersvgMap.set( "4.6x30mm",),
calibersvgMap.set( "12.7x55mm",),
calibersvgMap.set( "5.7x28mm",),
calibersvgMap.set( "23x75mm",),
calibersvgMap.set( "40x46mm",),
calibersvgMap.set( ".338Lapua",),
//*/
//エラー検知
AllCalibers.forEach(cal => {
  if (!calibersvgMap.has(cal)) {
    console.error("svg not registerd", cal)
  }
})