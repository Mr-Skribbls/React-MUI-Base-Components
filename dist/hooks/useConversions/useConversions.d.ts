declare const weightConversions: {
    g: number;
    kg: number;
    oz: number;
    lbs: number;
};
export type WeightUnit = keyof typeof weightConversions;
export declare const weightUnits: ("g" | "kg" | "oz" | "lbs")[];
export declare const useConversions: () => {
    convertWeight: (value: number, from: WeightUnit, to: WeightUnit) => number;
};
export default useConversions;
