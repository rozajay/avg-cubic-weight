import { Appliance } from '../types/appTypes';
import calculateCubicWeight from './calculateCubicWeight';
import { AIR_CONDITIONERS } from '../constants/index';

const findAirConditionersAvg = (objectsArray:Appliance[]): number | undefined => {
  const airConditioners = objectsArray.filter(
    (appliance: Appliance) => appliance.category === AIR_CONDITIONERS,
  );
  if (airConditioners.length > 0) {
    const weightsArray = airConditioners.map((airConditioner: Appliance) => {
      const { width, length, height } = airConditioner.size;
      return calculateCubicWeight(width, length, height);
    });
    const sumOfAllWeights = weightsArray.reduce((prev:number, current:number) => prev + current);
    const avgOfAllWeights = sumOfAllWeights / weightsArray.length;
    return avgOfAllWeights;
  }
  return undefined;
};

export default findAirConditionersAvg;
