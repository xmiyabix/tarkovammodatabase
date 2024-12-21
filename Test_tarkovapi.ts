import { request, gql } from "graphql-request";



const caliberNameMap = new Map<string, string>([
    ["Caliber556x45NATO", "5.56x45mm"],
    ["Caliber12g", "12Gauge"],
    ["Caliber762x54R", "7.62x54mmR"],
    ["Caliber762x39", "7.62x39mm"],
    ["Caliber9x19PARA", "9x19mm"],
    ["Caliber545x39", "5.45x39mm"],
    ["Caliber762x25TT", "7.62x25mmTT"],
    ["Caliber9x18PM", "9x18mmPM"],
    ["Caliber9x39", "9x39mm"],
    ["Caliber762x51", "762x51mm"],
    ["Caliber366TKM", ".366TKM"],
    ["Caliber9x21", "9x21mm"],
    ["Caliber20g", "20Gauge"],
    ["Caliber46x30", "4.6x30mm"],
    ["Caliber127x55", "12.7x55mm"],
    ["Caliber57x28", "5.7x28mm"],
    ["Caliber1143x23ACP", ".45ACP"],
    ["Caliber23x75", "23x75mm"],
    ["Caliber40x46", "40x46mm"],
    ["Caliber762x35", ".300Blackout"],
    ["Caliber86x70", ".338Lapua"],
    ["Caliber9x33R", ".357Magnum"],
]);

function toCaliberName(name:string):string{
    if(!caliberNameMap.has(name)){
        return name
    }
    return caliberNameMap.get(name)!
}

const ammoCateMap = new Map<string, string[]>([
    ["Pistol Ammos",[
        "9x18mmPM",
        "9x19mm",
        "9x21mm",
        "7.62x25mmTT",
        ".45ACP",
        ".357Magnum",
    ]],
    ["Rifle Ammos",[
        "5.56x45mm",
        ".300Blackout",
        "762x51mm",
        ".338Lapua",
        "5.45x39mm",
        "7.62x39mm",
        "7.62x54mmR",
        "9x39mm",
        "12.7x55mm",
    ]],
    ["PDW Ammos",[
        "4.6x30mm",
        "5.7x28mm",
    ]],
    ["SG Ammos",[
        "20Gauge",
        "12Gauge",
        ".366TKM",
        "23x75mm",
        "40x46mm",
    ]]
])

const allCalibers:string[] = []
ammoCateMap.forEach(value=>allCalibers.push(...value))

type AmmoData = {
    name:string;
    shortName: string;
    iconLink: string;
    caliber: string;
    damage: number;
    totalDamage:number;
    projectileCount: number;
    penetrationPower: number;
    armorDamage: number;
    totalArmorDamage:number;
    accuracyModifier: number;
    recoilModifier: number;
    fragmentationChance: number;
    ricochetChance: number;
    lightBleedModifier: number;
    heavyBleedModifier: number;
    initialSpeed: number;
    staminaBurnPerDamage: number;
    tracer: string;
    crafts:{
        count:number
        duration: number;
        station:string;
        level:number;
        required:{
            name:string
            count:number
        }[]
    }[]
    buy:{
        name:string;
        priceRUB: number;
        required:{
            value: number;
            type:
                | `playerLevel`
                | `loyaltyLevel`
                | `questCompleted`
                | `stationLevel`;
        }[]
    }[]
};

//== データ取得 ==

const queryAllAmmo = `{
    ammo(lang:en){
        item{
            name
            shortName
            iconLink
            buyFor{
              	vendor{
                	name
              	}
                priceRUB
                requirements{
                    value
                    type
                }
            }
            craftsFor{
                duration
                station{
                    name
                }
                level
                requiredItems{
                    count
                    item{
                      	name
                    }
                    attributes{
                      	type
                      	value
                    }
                }
                rewardItems{
                  	count
                }
            }
        }
        caliber
        damage
        projectileCount
        penetrationPower
        armorDamage
        accuracyModifier
        recoilModifier
        fragmentationChance
        ricochetChance
        lightBleedModifier
        heavyBleedModifier
        initialSpeed
        staminaBurnPerDamage
        tracer
        tracerColor
    }
}`;


type AmmoDataRaw = {
    item: {
        name: string;
        shortName: string;
        iconLink: string;
        buyFor: {
            vendor: {
                name: string;
            };
            priceRUB: number;
            requirements: {
                value: number;
                type:
                    | `playerLevel`
                    | `loyaltyLevel`
                    | `questCompleted`
                    | `stationLevel`;
            }[];
        }[];
        craftsFor: {
            duration: number;
            station: {
                name: string;
            };
            level: number;
            requiredItems: {
                count: number;
                item: {
                    name: string;
                };
                attributes: {
                    type: string;
                    value: string;
                }[];
            }[];
            rewardItems: {
                count: number;
            }[];
        }[];
    };
    caliber: string;
    damage: number;
    projectileCount: number;
    penetrationPower: number;
    armorDamage: number;
    accuracyModifier: number;
    recoilModifier: number;
    fragmentationChance: number;
    ricochetChance: number;
    lightBleedModifier: number;
    heavyBleedModifier: number;
    initialSpeed: number;
    staminaBurnPerDamage: number;
    tracer: boolean;
    tracerColor: string;
};


function processData(from:AmmoDataRaw):AmmoData{
    return{
        ...from,
        name:from.item.name,
        shortName:from.item.shortName,
        iconLink:from.item.iconLink,
        caliber:toCaliberName(from.caliber),
        totalDamage:from.damage*from.projectileCount,
        totalArmorDamage:from.armorDamage*from.projectileCount,
        crafts:from.item.craftsFor.map(craft=>({
            duration:craft.duration,
            count:craft.rewardItems[0].count,
            station:craft.station.name,
            level:craft.level,
            required:craft.requiredItems
                .filter(item=>{
                    if(item.attributes.length==0) return true;
                    const attr = item.attributes[0]
                    return attr.type==="tool"||attr.value
                })
                .map(item=>({
                    name:item.item.name,
                    count:item.count
                })),
        })),
        buy:from.item.buyFor.map(entry=>({
            name:entry.vendor.name,
            priceRUB:entry.priceRUB,
            required:entry.requirements
        })),
        tracer:(from.tracer?"":from.tracerColor)
    }
}



const caliberMap = new Map<string, AmmoData[]>();
const allAmmo: AmmoData[] = [];

request("https://api.tarkov.dev/graphql", queryAllAmmo).then((data) => {
    const rawData:AmmoDataRaw[] = data.ammo
    rawData.forEach((raw) => {
        const ammo = processData(raw);
        if (!caliberMap.has(ammo.caliber)) {
            caliberMap.set(ammo.caliber, []);
        }
        const list = caliberMap.get(ammo.caliber)!;
        list.push(ammo);
        allAmmo.push(ammo)        
    });
    console.log("ammo count", allAmmo.length);
    caliberMap.forEach((value, key) => {
        console.log(key, value.length);
        if(key===undefined){
            console.log(value)
        }
    });
    console.log(allAmmo[0])
});
