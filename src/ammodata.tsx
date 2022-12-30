import Tabletest, { TableEntry } from './Tabletest'

export function getAmmodata(ids: string[]) {
    let tmparr: TableEntry[] = ([]);
    ids.forEach( id => {
        if(ammoMap.has(id)){
            tmparr = tmparr.concat(ammoMap.get(id)!);//!でヌルが入らないことを保証している。
        }
    });
    ammoMap.get(ids[0]);
    return (tmparr);
};

const ammoMap = new Map<string, TableEntry[]>();

const ammo919datas = [
    { id: '9x19mm AP 6.3', damage: 52, penetration: 30, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 5, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 392, special: 'none' },
    { id: '9x19mm Green Tracer', damage: 58, penetration: 14, armordmg: 3, accuracy: -5, recoil: -6, fragmentchance: 15, ricochet: 5, lightbleed: 0, heavybleed: 0, projectilespeed: 365, special: 'Tracer (green)' },
    { id: '9x19mm Luger CCI', damage: 70, penetration: 10, armordmg: 8, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 20, heavybleed: 20, projectilespeed: 420, special: 'none' },
    { id: '9x19mm PBP gzh', damage: 52, penetration: 39, armordmg: 3, accuracy: 15, recoil: 15, fragmentchance: 5, ricochet: 20, lightbleed: 0, heavybleed: 0, projectilespeed: 560, special: 'none' },
    { id: '9x19mm PSO gzh', damage: 59, penetration: 10, armordmg: 2, accuracy: 0, recoil: 0, fragmentchance: 25, ricochet: 6.50, lightbleed: 0, heavybleed: 0, projectilespeed: 340, special: 'Subsonic' },
    { id: '9x19mm Pst gzh', damage: 54, penetration: 20, armordmg: 3, accuracy: 0, recoil: 0, fragmentchance: 15, ricochet: 5, lightbleed: 0, heavybleed: 0, projectilespeed: 457, special: 'none' },
    { id: '9x19mm QuakeMaker', damage: 85, penetration: 8, armordmg: 2, accuracy: 10, recoil: 10, fragmentchance: 10, ricochet: 10, lightbleed: 15, heavybleed: 22, projectilespeed: 290, special: 'Subsonic' },
    { id: '9x19mm RIP', damage: 102, penetration: 2, armordmg: 1, accuracy: 0, recoil: 20, fragmentchance: 100, ricochet: 0.20, lightbleed: 30, heavybleed: 10, projectilespeed: 381, special: 'none' }
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
ammoMap.set('9*19', ammo919datas);
ammoMap.set('9*18', ammo918datas);