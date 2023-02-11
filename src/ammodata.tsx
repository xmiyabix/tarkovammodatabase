


export function getAmmodata(ids: string[]) {
    let tmparr: AmmoDataEntry[] = ([]);//tmparrに対してAmmoDataEntry型の空配列を渡している。
    ids.forEach(id => {
        if (ammoMap.has(id)) {
            tmparr = tmparr.concat(ammoMap.get(id)!);//!でヌルが入らないことを保証している。
        }
    });
    ammoMap.get(ids[0]);
    return (tmparr);
};


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
    dotsvg?: SVG;
  
  }
  
  export type SVG = {
    shape:string;
    color:string;
    width:number;
  };

const ammoMap = new Map<string, AmmoDataEntry[]>();



const ammo919datas = [
    { id: '9x19mm AP 6.3', damage: 52, penetration: 30, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 5, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 392, special: 'none', dotsvg: { shape: 'M10,10 L15,15 M15,10 L10,15', color: '#fff', width: 2 } },
    { id: '9x19mm Green Tracer', damage: 58, penetration: 14, armordmg: 3, accuracy: -5, recoil: -6, fragmentchance: 15, ricochet: 5, lightbleed: 0, heavybleed: 0, projectilespeed: 365, special: 'Tracer (green)', dotsvg: { shape: 'M10,10 L15,15 M15,10 L10,15', color: '#fff', width: 2 } },
    { id: '9x19mm Luger CCI', damage: 70, penetration: 10, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 20, heavybleed: 20, projectilespeed: 420, special: 'none', dotsvg: { shape: 'M10,10 L15,15 M15,10 L10,15', color: '#fff', width: 2 } },
    { id: '9x19mm PBP gzh', damage: 52, penetration: 39, armordmg: 3, accuracy: 15, recoil: 15, fragmentchance: 5, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 560, special: 'none', dotsvg: { shape: 'M10,10 L15,15 M15,10 L10,15', color: '#fff', width: 2 } },
    { id: '9x19mm PSO gzh', damage: 59, penetration: 10, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 0, heavybleed: 0, projectilespeed: 340, special: 'Subsonic', dotsvg: { shape: 'M10,10 L15,15 M15,10 L10,15', color: '#fff', width: 2 } },
    { id: '9x19mm Pst gzh', damage: 54, penetration: 20, armordmg: 3, accuracy: 0, recoil: 0, fragmentchance: 15, ricochet: 5, lightbleed: 0, heavybleed: 0, projectilespeed: 457, special: 'none', dotsvg: { shape: 'M10,10 L15,15 M15,10 L10,15', color: '#fff', width: 2 } },
    { id: '9x19mm QuakeMaker', damage: 85, penetration: 8, armordmg: 2, accuracy: 10, recoil: 10, fragmentchance: 10, ricochet: 10, lightbleed: 15, heavybleed: 22, projectilespeed: 290, special: 'Subsonic', dotsvg: { shape: 'M10,10 L15,15 M15,10 L10,15', color: '#fff', width: 2 } },
    { id: '9x19mm RIP', damage: 102, penetration: 2, armordmg: 1, accuracy: 0, recoil: 20, fragmentchance: 100, ricochet: 0.20, lightbleed: 30, heavybleed: 10, projectilespeed: 381, special: 'none', dotsvg: { shape: 'M10,10 L15,15 M15,10 L10,15', color: '#fff', width: 2 } }
]
const ammo918datas = [
    { id: '9x18mm PM BZhT gzh', damage: 53, penetration: 18, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 17, ricochet: 10, lightbleed: 15, heavybleed: 0, projectilespeed: 325, special: 'Subsonic' },
    { id: '9x18mm PM P gzh', damage: 50, penetration: 5, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 10, heavybleed: 0, projectilespeed: 302, special: 'Subsonic' },
    { id: '9x18mm PM PBM gzh', damage: 40, penetration: 28, armordmg: 0, accuracy: 0, recoil: 4, fragmentchance: 16, ricochet: 9, lightbleed: 0, heavybleed: 0, projectilespeed: 519, special: 'none' },
    { id: '9x18mm PM PPe gzh', damage: 61, penetration: 7, armordmg: 5, accuracy: 0, recoil: 0, fragmentchance: 35, ricochet: 5, lightbleed: 15, heavybleed: 0, projectilespeed: 297, special: 'Subsonic' },
    { id: '9x18mm PM PPT gzh', damage: 59, penetration: 8, armordmg: 2, accuracy: -5, recoil: -7, fragmentchance: 17, ricochet: 10.00, lightbleed: 15, heavybleed: 0, projectilespeed: 301, special: 'Subsonic-Tracer(red)' },
    { id: '9x18mm PM PRS gs', damage: 58, penetration: 6, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 30, ricochet: 0.50, lightbleed: 15, heavybleed: 0, projectilespeed: 302, special: 'Subsonic' },
    { id: '9x18mm PM PS gs PPO', damage: 55, penetration: 6, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 3, lightbleed: 15, heavybleed: 0, projectilespeed: 330, special: 'Subsonic' },
    { id: '9x18mm PM PSO gzh', damage: 54, penetration: 5, armordmg: 3, accuracy: 10, recoil: 0, fragmentchance: 35, ricochet: 7, lightbleed: 15, heavybleed: 0, projectilespeed: 315, special: 'Subsonic' },
    { id: '9x18mm PM Pst gzh', damage: 50, penetration: 12, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 20, ricochet: 10, lightbleed: 0, heavybleed: 0, projectilespeed: 298, special: 'Subsonic' },
    { id: '9x18mm PM PSV', damage: 69, penetration: 3, armordmg: 5, accuracy: 0, recoil: 0, fragmentchance: 40, ricochet: 1, lightbleed: 10, heavybleed: 0, projectilespeed: 280, special: 'Subsonic' },
    { id: '9x18mm PM RG028 gzh', damage: 65, penetration: 13, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 2, ricochet: 5, lightbleed: 0, heavybleed: 0, projectilespeed: 330, special: 'Subsonic' },
    { id: '9x18mm PM SP7 gzh', damage: 77, penetration: 2, armordmg: 5, accuracy: 0, recoil: 0, fragmentchance: 2, ricochet: 5.00, lightbleed: 25, heavybleed: 10, projectilespeed: 420, special: 'none' },
    { id: '9x18mm PM SP8 gzh', damage: 67, penetration: 1, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 60, ricochet: 5, lightbleed: 15, heavybleed: 10, projectilespeed: 250, special: 'Subsonic' },
    { id: '9x18mm PMM PstM gzh', damage: 58, penetration: 24, armordmg: 3, accuracy: 0, recoil: 5, fragmentchance: 17, ricochet: 7.50, lightbleed: 0, heavybleed: 0, projectilespeed: 420, special: 'Overpressure(PP-9 Krin only)' }
]
const ammo921datas = [
    { id: '9x21mm BT gzh', damage: 63, penetration: 39, armordmg: 7, accuracy: -4, recoil: -4, fragmentchance: 20, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 410, special: 'none' },
    { id: '9x21mm P gzh', damage: 65, penetration: 18, armordmg: 4, accuracy: 0, recoil: 0, fragmentchance: 30, ricochet: 20, lightbleed: 15, heavybleed: 10, projectilespeed: 413, special: 'Tracer (red)' },
    { id: '9x21mm PE gzh', damage: 80, penetration: 15, armordmg: 3, accuracy: 0, recoil: 0, fragmentchance: 35, ricochet: 20, lightbleed: 15, heavybleed: 10, projectilespeed: 415, special: 'none' },
    { id: '9x21mm PS gzh', damage: 49, penetration: 35, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 20, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 410, special: 'none' }
]
const ammo45acpdatas = [
    { id: '.45 ACP AP', damage: 66, penetration: 38, armordmg: 8, accuracy: -5, recoil: 7, fragmentchance: 1, ricochet: 10, lightbleed: 0, heavybleed: 0, projectilespeed: 299, special: 'Subsonic' },
    { id: '.45 ACP Hydra-Shok', damage: 100, penetration: 13, armordmg: 0, accuracy: 0, recoil: 0, fragmentchance: 50, ricochet: 6.60, lightbleed: 0, heavybleed: 30, projectilespeed: 274, special: 'Subsonic' },
    { id: '.45 ACP Lasermatch FMJ', damage: 76, penetration: 19, armordmg: 7, accuracy: 10, recoil: 0, fragmentchance: 1, ricochet: 6.50, lightbleed: 0, heavybleed: 0, projectilespeed: 290, special: 'Tracer (red)-Subsonic' },
    { id: '.45 ACP Match FMJ', damage: 72, penetration: 25, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 1, ricochet: 6.50, lightbleed: 0, heavybleed: 0, projectilespeed: 340, special: 'Subsonic' },
    { id: '.45 ACP RIP', damage: 130, penetration: 3, armordmg: 2, accuracy: -5, recoil: 0, fragmentchance: 100, ricochet: 0.20, lightbleed: 30, heavybleed: 20, projectilespeed: 293, special: 'Subsonic' }
]
const ammo76225ttdatas = [
    { id: '7.62x25mm TT AKBS', damage: 58, penetration: 12, armordmg: 2, accuracy: 15, recoil: -15, fragmentchance: 25, ricochet: 6.50, lightbleed: 0, heavybleed: 0, projectilespeed: 425, special: 'none' },
    { id: '7.62x25mm TT FMJ43', damage: 60, penetration: 11, armordmg: 9, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 0, heavybleed: 0, projectilespeed: 427, special: 'none' },
    { id: '7.62x25mm TT LRN', damage: 64, penetration: 8, armordmg: 8, accuracy: 5, recoil: -5, fragmentchance: 35, ricochet: 5, lightbleed: 15, heavybleed: 10, projectilespeed: 375, special: 'none' },
    { id: '7.62x25mm TT LRNPC', damage: 66, penetration: 7, armordmg: 7, accuracy: 10, recoil: -10, fragmentchance: 35, ricochet: 5, lightbleed: 15, heavybleed: 10, projectilespeed: 385, special: 'none' },
    { id: '7.62x25mm TT P gl', damage: 58, penetration: 14, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 0, heavybleed: 0, projectilespeed: 430, special: 'none' },
    { id: '7.62x25mm TT Pst gzh', damage: 50, penetration: 25, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 20, ricochet: 10, lightbleed: 0, heavybleed: 0, projectilespeed: 430, special: 'none' },
    { id: '7.62x25mm TT PT gzh', damage: 55, penetration: 18, armordmg: 4, accuracy: -10, recoil: 0, fragmentchance: 16.60, ricochet: 10, lightbleed: 0, heavybleed: 0, projectilespeed: 415, special: 'Tracer (red)' }
]
const ammo57datas = [
    { id: '5.7x28mm L191', damage: 58, penetration: 33, armordmg: 1, accuracy: -4, recoil: 0, fragmentchance: 20, ricochet: 60, lightbleed: 0, heavybleed: 0, projectilespeed: 922, special: 'Tracer (red)    Peacekeeper LL3' },
    { id: '5.7x28mm R37.F', damage: 98, penetration: 8, armordmg: 7, accuracy: 0, recoil: 0, fragmentchance: 100, ricochet: 5, lightbleed: 15, heavybleed: 15, projectilespeed: 729, special: 'none    Mechanic LL4 after Gunsmith - Part 10' },
    { id: '5.7x28mm R37.X', damage: 81, penetration: 11, armordmg: 4, accuracy: 0, recoil: 0, fragmentchance: 70, ricochet: 10, lightbleed: 10, heavybleed: 20, projectilespeed: 724, special: 'none    Mechanic LL3' },
    { id: '5.7x28mm SB193', damage: 54, penetration: 35, armordmg: 7, accuracy: 5, recoil: -24, fragmentchance: 20, ricochet: 30, lightbleed: 0, heavybleed: 0, projectilespeed: 299, special: 'Subsonic    Peacekeeper LL3' },
    { id: '5.7x28mm SS190', damage: 49, penetration: 37, armordmg: 3, accuracy: 0, recoil: 0, fragmentchance: 20, ricochet: 60, lightbleed: 0, heavybleed: 0, projectilespeed: 715, special: 'none    Peacekeeper LL3' },
    { id: '5.7x28mm SS197SR', damage: 62, penetration: 20, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 50, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 594, special: 'none    Peacekeeper LL2' },
    { id: '5.7x28mm SS198LF', damage: 74, penetration: 10, armordmg: 5, accuracy: 0, recoil: 0, fragmentchance: 80, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 792, special: 'none    Peacekeeper LL3' }
]

const ammo46datas = [
    { id: '4.6x30mm Action SX', damage: 65, penetration: 18, armordmg: 9, accuracy: 0, recoil: 0, fragmentchance: 50, ricochet: 30, lightbleed: 0, heavybleed: 0, projectilespeed: 690, special: 'none' },
    { id: '4.6x30mm AP SX', damage: 35, penetration: 53, armordmg: 6, accuracy: 0, recoil: 10, fragmentchance: 10, ricochet: 60, lightbleed: 0, heavybleed: 0, projectilespeed: 680, special: 'none' },
    { id: '4.6x30mm FMJ SX', damage: 43, penetration: 40, armordmg: 1, accuracy: 0, recoil: 0, fragmentchance: 20, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 620, special: 'none' },
    { id: '4.6x30mm Subsonic SX', damage: 45, penetration: 36, armordmg: 6, accuracy: 10, recoil: -22, fragmentchance: 20, ricochet: 50, lightbleed: 0, heavybleed: 0, projectilespeed: 290, special: 'Subsonic' }
]

const ammo357datas = [
    { id: '.357 Magnum FMJ', damage: 70, penetration: 35, armordmg: 3, accuracy: 0, recoil: 12, fragmentchance: 1, ricochet: 6.50, lightbleed: 0, heavybleed: 10, projectilespeed: 385, special: 'none' },
    { id: '.357 Magnum HP', damage: 99, penetration: 18, armordmg: 0, accuracy: 15, recoil: 15, fragmentchance: 60, ricochet: 2.50, lightbleed: 40, heavybleed: 30, projectilespeed: 481, special: 'none' },
    { id: '.357 Magnum JHP', damage: 88, penetration: 24, armordmg: 8, accuracy: 15, recoil: 8, fragmentchance: 60, ricochet: 5.50, lightbleed: 25, heavybleed: 25, projectilespeed: 425, special: 'none' },
    { id: '.357 Magnum SP', damage: 108, penetration: 12, armordmg: 5, accuracy: 27, recoil: -29, fragmentchance: 20, ricochet: 3, lightbleed: 35, heavybleed: 20, projectilespeed: 455, special: 'none' }
]

const ammo54539datas = [
    { id: '5.45x39mm 7N40', damage: 52, penetration: 44, armordmg: 0, accuracy: 50, recoil: -20, fragmentchance: 2, ricochet: 30, lightbleed: 20, heavybleed: 15, projectilespeed: 915, special: 'none' },
    { id: '5.45x39mm BP gs', damage: 45, penetration: 37, armordmg: 1, accuracy: 0, recoil: 0, fragmentchance: 16, ricochet: 36, lightbleed: 0, heavybleed: 0, projectilespeed: 890, special: 'none' },
    { id: '5.45x39mm BS gs', damage: 40, penetration: 51, armordmg: 7, accuracy: -3, recoil: 10, fragmentchance: 17, ricochet: 38, lightbleed: 0, heavybleed: 0, projectilespeed: 830, special: 'none' },
    { id: '5.45x39mm BT gs', damage: 42, penetration: 40, armordmg: 5, accuracy: -2, recoil: 3, fragmentchance: 16, ricochet: 37, lightbleed: 0, heavybleed: 0, projectilespeed: 880, special: 'Tracer (red)' },
    { id: '5.45x39mm FMJ', damage: 56, penetration: 21, armordmg: 0, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 26, lightbleed: 0, heavybleed: 0, projectilespeed: 884, special: 'none' },
    { id: '5.45x39mm HP', damage: 74, penetration: 12, armordmg: 0, accuracy: 0, recoil: 5, fragmentchance: 35, ricochet: 20, lightbleed: 15, heavybleed: 15, projectilespeed: 884, special: 'none' },
    { id: '5.45x39mm PP gs', damage: 44, penetration: 36, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 17, ricochet: 38, lightbleed: 0, heavybleed: 0, projectilespeed: 886, special: 'none' },
    { id: '5.45x39mm PPBS gs "Igolnik"', damage: 37, penetration: 62, armordmg: 5, accuracy: 0, recoil: 15, fragmentchance: 2, ricochet: 38, lightbleed: 0, heavybleed: 0, projectilespeed: 905, special: 'none' },
    { id: '5.45x39mm PRS gs', damage: 60, penetration: 12, armordmg: 8, accuracy: 0, recoil: -5, fragmentchance: 30, ricochet: 4, lightbleed: 0, heavybleed: 0, projectilespeed: 866, special: 'none' },
    { id: '5.45x39mm PS gs', damage: 48, penetration: 27, armordmg: 5, accuracy: 0, recoil: 0, fragmentchance: 40, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 890, special: 'none' },
    { id: '5.45x39mm SP', damage: 68, penetration: 13, armordmg: 4, accuracy: 10, recoil: -15, fragmentchance: 45, ricochet: 15, lightbleed: 10, heavybleed: 10, projectilespeed: 873, special: 'none' },
    { id: '5.45x39mm T gs', damage: 57, penetration: 20, armordmg: 8, accuracy: -5, recoil: -5, fragmentchance: 16, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 883, special: 'Tracer (red)' },
    { id: '5.45x39mm US gs', damage: 65, penetration: 15, armordmg: 4, accuracy: 0, recoil: -25, fragmentchance: 10, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 303, special: 'Subsonic' }
]
const ammo76239datas = [
    { id: '7.62x39mm BP gzh', damage: 58, penetration: 47, armordmg: 3, accuracy: -3, recoil: 5, fragmentchance: 12, ricochet: 31.50, lightbleed: 0, heavybleed: 0, projectilespeed: 730, special: 'none' },
    { id: '7.62x39mm HP', damage: 87, penetration: 15, armordmg: 5, accuracy: -5, recoil: 0, fragmentchance: 26.30, ricochet: 17.50, lightbleed: 15, heavybleed: 15, projectilespeed: 754, special: 'none' },
    { id: '7.62x39mm MAI AP', damage: 46, penetration: 58, armordmg: 6, accuracy: -5, recoil: 10, fragmentchance: 5, ricochet: 43.50, lightbleed: 10, heavybleed: 10, projectilespeed: 730, special: 'none' },
    { id: '7.62x39mm PS gzh', damage: 57, penetration: 35, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 35, lightbleed: 0, heavybleed: 0, projectilespeed: 700, special: 'none' },
    { id: '7.62x39mm T-45M1 gzh', damage: 64, penetration: 30, armordmg: 6, accuracy: -4, recoil: -6, fragmentchance: 12, ricochet: 35, lightbleed: 0, heavybleed: 0, projectilespeed: 720, special: 'Tracer (red)' },
    { id: '7.62x39mm US gzh', damage: 56, penetration: 29, armordmg: 2, accuracy: 5, recoil: -30, fragmentchance: 7.50, ricochet: 35.80, lightbleed: 0, heavybleed: 0, projectilespeed: 300, special: 'Subsonic' }
]

const ammo55645datas = [
    { id: '5.56x45mm FMJ', damage: 54, penetration: 23, armordmg: 3, accuracy: 10, recoil: -5, fragmentchance: 50, ricochet: 26, lightbleed: 0, heavybleed: 0, projectilespeed: 957, special: 'none' },
    { id: '5.56x45mm HP', damage: 79, penetration: 8, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 70, ricochet: 20, lightbleed: 15, heavybleed: 15, projectilespeed: 947, special: 'none' },
    { id: '5.56x45mm M855', damage: 53, penetration: 28, armordmg: 7, accuracy: -5, recoil: 0, fragmentchance: 40, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 922, special: 'none' },
    { id: '5.56x45mm M855A1', damage: 49, penetration: 44, armordmg: 2, accuracy: -10, recoil: 5, fragmentchance: 34, ricochet: 38, lightbleed: 0, heavybleed: 0, projectilespeed: 945, special: 'none' },
    { id: '5.56x45mm M856', damage: 59, penetration: 23, armordmg: 4, accuracy: -2, recoil: -2, fragmentchance: 32.80, ricochet: 38, lightbleed: 0, heavybleed: 0, projectilespeed: 874, special: 'Tracer (red)' },
    { id: '5.56x45mm M856A1', damage: 54, penetration: 37, armordmg: 2, accuracy: -1, recoil: 4, fragmentchance: 32.80, ricochet: 38, lightbleed: 0, heavybleed: 0, projectilespeed: 940, special: 'Tracer (red)' },
    { id: '5.56x45mm M995', damage: 42, penetration: 53, armordmg: 8, accuracy: 0, recoil: 8, fragmentchance: 32, ricochet: 36, lightbleed: 0, heavybleed: 0, projectilespeed: 1013, special: 'none' },
    { id: '5.56x45mm MK 255 Mod 0 (RRLP)', damage: 63, penetration: 18, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 3, ricochet: 10, lightbleed: 0, heavybleed: 0, projectilespeed: 936, special: 'none' },
    { id: '5.56x45mm MK 318 Mod 0 (SOST)', damage: 69, penetration: 20, armordmg: 5, accuracy: 10, recoil: 0, fragmentchance: 15, ricochet: 10, lightbleed: 10, heavybleed: 10, projectilespeed: 902, special: 'none' },
    { id: '5.56x45mm SSA AP', damage: 38, penetration: 57, armordmg: 4, accuracy: -6, recoil: 6, fragmentchance: 20, ricochet: 48, lightbleed: 0, heavybleed: 0, projectilespeed: 1013, special: 'none' },
    { id: '5.56x45mm Warmageddon', damage: 88, penetration: 3, armordmg: 1, accuracy: 10, recoil: 10, fragmentchance: 90, ricochet: 5, lightbleed: 20, heavybleed: 20, projectilespeed: 936, special: 'none' }
]

const ammo76251datas = [
    { id: '7.62x51mm BCP FMJ', damage: 88, penetration: 31, armordmg: 3, accuracy: 0, recoil: -3, fragmentchance: 25, ricochet: 20, lightbleed: 20, heavybleed: 20, projectilespeed: 840, special: 'none' },
    { id: '7.62x51mm M61', damage: 70, penetration: 64, armordmg: 3, accuracy: 3, recoil: 10, fragmentchance: 13, ricochet: 30, lightbleed: 0, heavybleed: 0, projectilespeed: 849, special: 'none' },
    { id: '7.62x51mm M62 Tracer', damage: 79, penetration: 44, armordmg: 5, accuracy: -6, recoil: -5, fragmentchance: 14, ricochet: 38, lightbleed: 0, heavybleed: 0, projectilespeed: 816, special: 'Tracer (green)' },
    { id: '7.62x51mm M80', damage: 80, penetration: 41, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 17, ricochet: 38, lightbleed: 0, heavybleed: 0, projectilespeed: 833, special: 'none' },
    { id: '7.62x51mm M993', damage: 67, penetration: 70, armordmg: 5, accuracy: 5, recoil: 8, fragmentchance: 13, ricochet: 28, lightbleed: 0, heavybleed: 0, projectilespeed: 910, special: 'none' },
    { id: '7.62x51mm TCW SP', damage: 67, penetration: 34, armordmg: 0, accuracy: -8, recoil: -5, fragmentchance: 20, ricochet: 50, lightbleed: 0, heavybleed: 0, projectilespeed: 808, special: 'none' },
    { id: '7.62x51mm Ultra Nosler', damage: 107, penetration: 15, armordmg: 0, accuracy: 10, recoil: -5, fragmentchance: 70, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 822, special: 'none' }
]

const ammo76254rdatas = [
    { id: '7.62x54mm R BS gs', damage: 72, penetration: 70, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 8.30, ricochet: 34, lightbleed: 0, heavybleed: 0, projectilespeed: 785, special: 'none' },
    { id: '7.62x54mm R BT gzh', damage: 78, penetration: 55, armordmg: 7, accuracy: -2, recoil: -4, fragmentchance: 8.10, ricochet: 26.50, lightbleed: 0, heavybleed: 0, projectilespeed: 875, special: 'Tracer (green)' },
    { id: '7.62x54mm R LPS gzh', damage: 81, penetration: 42, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 18, ricochet: 39, lightbleed: 0, heavybleed: 0, projectilespeed: 865, special: 'none' },
    { id: '7.62x54mm R PS gzh', damage: 84, penetration: 45, armordmg: 4, accuracy: 10, recoil: 8, fragmentchance: 8.30, ricochet: 28.50, lightbleed: 0, heavybleed: 0, projectilespeed: 875, special: 'none' },
    { id: '7.62x54mm R SNB gzh', damage: 75, penetration: 62, armordmg: 7, accuracy: 0, recoil: 10, fragmentchance: 8, ricochet: 28.50, lightbleed: 0, heavybleed: 0, projectilespeed: 875, special: 'none' },
    { id: '7.62x54mm R T-46M gzh', damage: 82, penetration: 41, armordmg: 3, accuracy: -1, recoil: -5, fragmentchance: 18, ricochet: 30, lightbleed: 0, heavybleed: 0, projectilespeed: 800, special: 'Tracer (green)' }
]

const ammo366tkmdatas = [
    { id: '.366 TKM AP-M', damage: 90, penetration: 42, armordmg: 0, accuracy: -28, recoil: 35, fragmentchance: 1, ricochet: 6.50, lightbleed: 0, heavybleed: 10, projectilespeed: 602, special: 'none' },
    { id: '.366 TKM EKO', damage: 73, penetration: 30, armordmg: 0, accuracy: -10, recoil: -15, fragmentchance: 20, ricochet: 10, lightbleed: 0, heavybleed: 20, projectilespeed: 770, special: 'none' },
    { id: '.366 TKM FMJ', damage: 98, penetration: 23, armordmg: 8, accuracy: 0, recoil: 10, fragmentchance: 25, ricochet: 6.50, lightbleed: 20, heavybleed: 25, projectilespeed: 580, special: 'none' },
    { id: '.366 TKM Geksa', damage: 110, penetration: 14, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 45, ricochet: 5, lightbleed: 30, heavybleed: 10, projectilespeed: 550, special: 'none' }
]

const ammo300datas = [
    { id: '.300 Blackout AP', damage: 51, penetration: 48, armordmg: 5, accuracy: 0, recoil: 10, fragmentchance: 30, ricochet: 10, lightbleed: 15, heavybleed: 15, projectilespeed: 635, special: 'none' },
    { id: '.300 Blackout BCP FMJ', damage: 60, penetration: 30, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 30, ricochet: 30, lightbleed: 0, heavybleed: 0, projectilespeed: 605, special: 'none' },
    { id: '.300 Blackout M62 Tracer', damage: 54, penetration: 36, armordmg: 0, accuracy: 0, recoil: 5, fragmentchance: 20, ricochet: 37, lightbleed: 0, heavybleed: 0, projectilespeed: 442, special: 'Tracer (red)' },
    { id: '.300 Blackout V-Max', damage: 72, penetration: 20, armordmg: 5, accuracy: 30, recoil: -10, fragmentchance: 25, ricochet: 10, lightbleed: 22, heavybleed: 0, projectilespeed: 723, special: 'none' },
    { id: '.300 Whisper', damage: 90, penetration: 14, armordmg: 9, accuracy: 5, recoil: -5, fragmentchance: 35, ricochet: 10, lightbleed: 0, heavybleed: 20, projectilespeed: 853, special: 'none' }
]

const ammod939datas = [
    { id: '9x39mm BP gs', damage: 60, penetration: 55, armordmg: 8, accuracy: 10, recoil: 22, fragmentchance: 10, ricochet: 50, lightbleed: 0, heavybleed: 0, projectilespeed: 295, special: 'Subsonic' },
    { id: '9x39mm PAB-9 gs', damage: 62, penetration: 48, armordmg: 2, accuracy: -15, recoil: 10, fragmentchance: 10, ricochet: 48, lightbleed: 0, heavybleed: 0, projectilespeed: 320, special: 'Subsonic' },
    { id: '9x39mm SP-5 gs', damage: 71, penetration: 28, armordmg: 0, accuracy: 0, recoil: -5, fragmentchance: 20, ricochet: 40, lightbleed: 0, heavybleed: 10, projectilespeed: 290, special: 'Subsonic' },
    { id: '9x39mm SP-6 gs', damage: 58, penetration: 46, armordmg: 0, accuracy: 0, recoil: 10, fragmentchance: 10, ricochet: 50, lightbleed: 10, heavybleed: 10, projectilespeed: 305, special: 'Subsonic' },
    { id: '9x39mm SPP gs', damage: 68, penetration: 40, armordmg: 5, accuracy: 10, recoil: 10, fragmentchance: 20, ricochet: 40, lightbleed: 10, heavybleed: 20, projectilespeed: 310, special: 'Subsonic' }
]

const ammo127datas = [
    { id: '12.7x55mm PS12', damage: 115, penetration: 28, armordmg: 0, accuracy: 10, recoil: 0, fragmentchance: 30, ricochet: 40, lightbleed: 30, heavybleed: 20, projectilespeed: 285, special: 'Subsonic' },
    { id: '12.7x55mm PS12A', damage: 165, penetration: 10, armordmg: 2, accuracy: -15, recoil: -12, fragmentchance: 70, ricochet: 20, lightbleed: 35, heavybleed: 30, projectilespeed: 290, special: 'Subsonic' },
    { id: '12.7x55mm PS12B', damage: 102, penetration: 46, armordmg: 7, accuracy: 0, recoil: 15, fragmentchance: 30, ricochet: 50, lightbleed: 0, heavybleed: 15, projectilespeed: 300, special: 'Subsonic' }
]

const ammo338lapuadatas = [
    { id: '.338 Lapua Magnum AP', damage: 115, penetration: 79, armordmg: 9, accuracy: 0, recoil: 10, fragmentchance: 13, ricochet: 30, lightbleed: 20, heavybleed: 55, projectilespeed: 849, special: 'none' },
    { id: '.338 Lapua Magnum FMJ', damage: 122, penetration: 47, armordmg: 3, accuracy: 0, recoil: 0, fragmentchance: 20, ricochet: 40, lightbleed: 35, heavybleed: 50, projectilespeed: 900, special: 'none' },
    { id: '.338 Lapua Magnum TAC-X', damage: 196, penetration: 18, armordmg: 5, accuracy: 10, recoil: 5, fragmentchance: 50, ricochet: 40, lightbleed: 80, heavybleed: 50, projectilespeed: 880, special: 'none' },
    { id: '.338 Lapua Magnum UCW', damage: 142, penetration: 32, armordmg: 0, accuracy: -5, recoil: 0, fragmentchance: 60, ricochet: 40, lightbleed: 50, heavybleed: 40, projectilespeed: 849, special: 'none' }
]

const ammo12gaugedatas = [
    { id: '12/70 8.5mm Magnum buckshot', damage: 400, penetration: 2, armordmg: 6, accuracy: -15, recoil: 115, fragmentchance: 0, ricochet: 0, lightbleed: 20, heavybleed: 10, projectilespeed: 385, special: 'Pellet8(DMG50)' },
    { id: '12/70 6.5mm Express buckshot', damage: 315, penetration: 3, armordmg: 6, accuracy: 15, recoil: 0, fragmentchance: 0, ricochet: 0, lightbleed: 0, heavybleed: 0, projectilespeed: 430, special: 'Pellet9(DMG35)' },
    { id: '12/70 7mm buckshot', damage: 312, penetration: 3, armordmg: 6, accuracy: 0, recoil: 0, fragmentchance: 0, ricochet: 0, lightbleed: 0, heavybleed: 0, projectilespeed: 415, special: 'Pellet8(DMG39)' },
    { id: '12/70 5.25mm buckshot', damage: 296, penetration: 1, armordmg: 5, accuracy: 0, recoil: 0, fragmentchance: 0, ricochet: 0, lightbleed: 0, heavybleed: 0, projectilespeed: 330, special: 'Pellet8(DMG37)Subsonic' },
    { id: '12/70 RIP', damage: 265, penetration: 2, armordmg: 1, accuracy: 80, recoil: 35, fragmentchance: 100, ricochet: 1, lightbleed: 40, heavybleed: 25, projectilespeed: 410, special: 'none' },
    { id: '12/70 SuperFormance HP slug', damage: 220, penetration: 5, armordmg: 2, accuracy: 170, recoil: -15, fragmentchance: 39, ricochet: 10, lightbleed: 30, heavybleed: 40, projectilespeed: 594, special: 'none' },
    { id: '12/70 Copper Sabot Premier HP slug', damage: 206, penetration: 14, armordmg: 6, accuracy: 150, recoil: 10, fragmentchance: 38, ricochet: 10, lightbleed: 35, heavybleed: 25, projectilespeed: 442, special: 'Pellet8(DMG25)' },
    { id: '12/70 flechette', damage: 200, penetration: 31, armordmg: 6, accuracy: -10, recoil: 0, fragmentchance: 0, ricochet: 0, lightbleed: 25, heavybleed: 25, projectilespeed: 320, special: 'Subsonic' },
    { id: '12/70 makeshift .50 BMG slug', damage: 197, penetration: 26, armordmg: 7, accuracy: 90, recoil: 25, fragmentchance: 5, ricochet: 10, lightbleed: 0, heavybleed: 15, projectilespeed: 410, special: 'Tracer(red)' },
    { id: '12/70 Grizzly 40 slug', damage: 190, penetration: 12, armordmg: 8, accuracy: 80, recoil: 20, fragmentchance: 12, ricochet: 10, lightbleed: 0, heavybleed: 10, projectilespeed: 390, special: 'none' },
    { id: '12/70 FTX Custom Lite slug', damage: 183, penetration: 20, armordmg: 0, accuracy: 135, recoil: -25, fragmentchance: 10, ricochet: 10, lightbleed: 0, heavybleed: 0, projectilespeed: 480, special: 'none' },
    { id: '12/70 Dual Sabot slug', damage: 170, penetration: 17, armordmg: 5, accuracy: 100, recoil: 15, fragmentchance: 10, ricochet: 10, lightbleed: 0, heavybleed: 15, projectilespeed: 415, special: 'Pellet2(DMG85)' },
    { id: '12/70 lead slug', damage: 170, penetration: 15, armordmg: 5, accuracy: 120, recoil: 0, fragmentchance: 20, ricochet: 10, lightbleed: 10, heavybleed: 15, projectilespeed: 370, special: 'none' },
    { id: '12/70 AP-20 armor-piercing slug', damage: 164, penetration: 37, armordmg: 5, accuracy: 80, recoil: 50, fragmentchance: 3, ricochet: 10, lightbleed: 0, heavybleed: 10, projectilespeed: 510, special: 'none' },
    { id: '12/70 "Poleva-6u" slug', damage: 150, penetration: 20, armordmg: 0, accuracy: 115, recoil: -10, fragmentchance: 15, ricochet: 10, lightbleed: 0, heavybleed: 5, projectilespeed: 430, special: 'none' },
    { id: '12/70 "Poleva-3" slug', damage: 140, penetration: 17, armordmg: 0, accuracy: 110, recoil: -15, fragmentchance: 20, ricochet: 10, lightbleed: 0, heavybleed: 0, projectilespeed: 410, special: 'none' }
]

const ammo20gaugedatas = [
    { id: '20/70 "explosive" slug', damage: 51, penetration: 1, armordmg: 2, accuracy: -7, recoil: 25, fragmentchance: 0, ricochet: 0, lightbleed: 0, heavybleed: 0, projectilespeed: 251, special: 'Explosive' },
    { id: '20/70 "Flechetta Plus"', damage: 284, penetration: 45, armordmg: 7, accuracy: 0, recoil: 25, fragmentchance: 0, ricochet: 0, lightbleed: 35, heavybleed: 30, projectilespeed: 618.02, special: 'Pellet4(DMG71)' },
    { id: '20/70 "Poleva-3" slug', damage: 120, penetration: 14, armordmg: 5, accuracy: 110, recoil: -15, fragmentchance: 20, ricochet: 10, lightbleed: 0, heavybleed: 0, projectilespeed: 425, special: 'none' },
    { id: '20/70 "Poleva-6u" slug', damage: 135, penetration: 17, armordmg: 0, accuracy: 110, recoil: -10, fragmentchance: 15, ricochet: 10, lightbleed: 0, heavybleed: 10, projectilespeed: 445, special: 'none' },
    { id: '20/70 5.6mm buckshot', damage: 208, penetration: 1, armordmg: 2, accuracy: -10, recoil: 10, fragmentchance: 0, ricochet: 0, lightbleed: 0, heavybleed: 0, projectilespeed: 340, special: 'Pellet8(DMG26)Subsonic' },
    { id: '20/70 6.2mm buckshot', damage: 176, penetration: 2, armordmg: 3, accuracy: 0, recoil: 0, fragmentchance: 0, ricochet: 0, lightbleed: 0, heavybleed: 0, projectilespeed: 410, special: 'Pellet8(DMG22)' },
    { id: '20/70 7.3mm buckshot', damage: 207, penetration: 3, armordmg: 3, accuracy: 0, recoil: 15, fragmentchance: 0, ricochet: 0, lightbleed: 0, heavybleed: 0, projectilespeed: 475, special: 'Pellet9(DMG23)' },
    { id: '20/70 7.5mm buckshot', damage: 200, penetration: 3, armordmg: 4, accuracy: 0, recoil: 0, fragmentchance: 0, ricochet: 0, lightbleed: 0, heavybleed: 0, projectilespeed: 430, special: 'Pellet8(DMG25)' },
    { id: '20/70 Devastator slug', damage: 198, penetration: 5, armordmg: 3, accuracy: 125, recoil: 30, fragmentchance: 100, ricochet: 10, lightbleed: 20, heavybleed: 30, projectilespeed: 405, special: 'none' },
    { id: '20/70 Elephant killer slug', damage: 108, penetration: 47, armordmg: 0, accuracy: -5, recoil: 30, fragmentchance: 10, ricochet: 20, lightbleed: 22, heavybleed: 35, projectilespeed: 620.13, special: 'none' },
    { id: '20/70 Star slug', damage: 154, penetration: 16, armordmg: 2, accuracy: 130, recoil: 5, fragmentchance: 10, ricochet: 10, lightbleed: 0, heavybleed: 30, projectilespeed: 415, special: 'none' }
]

const ammo8gaugedatas = [
    { id: '23x75mm "Barrikada" slug', damage: 192, penetration: 39, armordmg: 5, accuracy: -5, recoil: 25, fragmentchance: 20, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 420, special: 'none' },
    { id: '23x75mm "Shrapnel-10" buckshot', damage: 696, penetration: 11, armordmg: 0, accuracy: 0, recoil: 0, fragmentchance: 0, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 270, special: 'Pellet8(DMG87)' },
    { id: '23x75mm "Shrapnel-25" buckshot', damage: 624, penetration: 10, armordmg: 0, accuracy: 20, recoil: 10, fragmentchance: 0, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 375, special: 'Pellet8(DMG78)' },
    { id: '23x75mm "Zvezda" flashbang round', damage: 0, penetration: 0, armordmg: 0, accuracy: 0, recoil: 20, fragmentchance: 30, ricochet: 40, lightbleed: 0, heavybleed: 0, projectilespeed: 80, special: 'Flashbang' }
]
//Rifleammo
ammoMap.set('300blackout', ammo300datas);
ammoMap.set('338lapua', ammo338lapuadatas);
ammoMap.set('366tkm', ammo366tkmdatas);
ammoMap.set('5.45*39', ammo54539datas);
ammoMap.set('5.56*45', ammo55645datas);
ammoMap.set('7.62*39', ammo76239datas);
ammoMap.set('7.62*51', ammo76251datas);
ammoMap.set('7.62*54r', ammo76254rdatas);
ammoMap.set('9*39', ammod939datas);
ammoMap.set('12.7*55', ammo127datas);
//pistol/pdwammo
ammoMap.set('357magnum', ammo357datas);
ammoMap.set('45acp', ammo45acpdatas);
ammoMap.set('4.6*30', ammo46datas);
ammoMap.set('5.7*28', ammo57datas);
ammoMap.set('7.62*25', ammo76225ttdatas);
ammoMap.set('9*19', ammo919datas);
ammoMap.set('9*18', ammo918datas);
ammoMap.set('9*21', ammo921datas);
//shotgunammo
ammoMap.set('12gauge', ammo12gaugedatas);
ammoMap.set('20gauge', ammo20gaugedatas);
ammoMap.set('8gauge', ammo8gaugedatas);