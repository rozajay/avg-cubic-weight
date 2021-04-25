import { DIVISION_FACTOR, CONVERSION_FACTOR } from '../constants';

const calculateCubicWeight = (
  width: number,
  length: number,
  height: number,
): number => {
  const cubicWeight = width * length * height * CONVERSION_FACTOR;
  const cubicWeightInKg = cubicWeight / DIVISION_FACTOR;
  return cubicWeightInKg;
};

export default calculateCubicWeight;
