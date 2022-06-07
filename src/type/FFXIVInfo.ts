export const Language_Value = ["JP", "EN", "FR", "DE", "KR", "CN"] as const;
export const Region_Value = ["JP", "NA", "EU", "OA", "CN", "KR"] as const;
export const Tank_Value = ["PLD", "WAR", "DRK", "GNB"] as const;
export const Healer_Value = ["WHM", "SCH", "AST", "SGE"] as const;
export const Melee_Value = ["DRG", "MNK", "NIN", "RPR", "SAM"] as const;
export const Range_Value = ["BRD", "MCH", "DNC"] as const;
export const Caster_Value = ["BLM", "SMN", "RDM"] as const;
export const Limited_Value = ["BLU"] as const;

export type Region = typeof Region_Value[number];
export type Job = Tank | Healer | Melee | Range | Caster | Limited;
export type Tank = typeof Tank_Value[number];
export type Healer = typeof Healer_Value[number];
export type Melee = typeof Melee_Value[number];
export type Range = typeof Range_Value[number];
export type Caster = typeof Caster_Value[number];
export type Limited = typeof Limited_Value[number];
export type Language = typeof Language_Value[number];

export interface Game {
  version: number;
  patch: number;
}

export type DungeonType = "raid" | "extreme" | "ultimate" | "alliance" | "etc";
