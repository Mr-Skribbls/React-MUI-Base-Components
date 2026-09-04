const weightConversions = {
  g: 1,
  kg: 1000,
  oz: 28.349523125,
  lbs: 453.59237,
};

import { getTypeKeys } from '../../services/helpers';

export type WeightUnit = keyof typeof weightConversions;

export const weightUnits = getTypeKeys(weightConversions);

export const useConversions = () => {

  const convertWeight = (value: number, from: WeightUnit, to: WeightUnit) => {
    const grams = value * weightConversions[from];
    return grams / weightConversions[to];
  };

  return {
    convertWeight,
  };
};

export default useConversions;