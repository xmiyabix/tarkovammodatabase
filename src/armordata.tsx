export function getArmordata(ids: string[]) {
	let tmparr: ArmorDataEntry[] = []; //tmparrに対してArmorDataEntry型の空配列を渡している。
	ids.forEach((id) => {
		if (armorMap.has(id)) {
			tmparr = tmparr.concat(armorMap.get(id)!); //!でヌルが入らないことを保証している。
		}
	});
	armorMap.get(ids[0]);
	return tmparr;
}
export type ArmorDataEntry = {
	id: string;
	type: string;
	material: string;
	class: number;
	areas: string;
	durability: number;
	movementspeed: number;
	turningspeed: number;
	ergonomics: number;
	weight: number;
};

const armorMap = new Map<string, ArmorDataEntry[]>();

//Database

const armorvestdatas = [
	{
		id: "testarmor",
		type: "Light",
		material: "Aramid",
		class: 4,
		areas: "Thorax",
		durability: 80,
		movementspeed: 0,
		turningspeed: -20,
		ergonomics: -10,
		weight: 6,
	},
];

armorMap.set("armorvest", armorvestdatas);
