import DIVISION_FACTOR from '../constants';

const calculateCubicWeight = (
  width: number,
  length: number,
  height: number,
  conversionFactor: number,
): number => {
  const cubicWeight = width * length * height * conversionFactor;
  const cubicWeightInKg = cubicWeight / DIVISION_FACTOR;
  return cubicWeightInKg;
};

export default calculateCubicWeight;
