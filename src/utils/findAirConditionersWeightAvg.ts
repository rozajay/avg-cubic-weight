import { Appliance } from '../types/appTypes';
import calculateCubicWeight from './calculateCubicWeight';
import { AIR_CONDITIONERS } from '../constants/index';

const findAirConditionersAvg = (objectsArray:Appliance[]): number | undefined => {
  // Find all appliances with name Air Conditioner
  const airConditioners = objectsArray.filter(
    (appliance: Appliance) => appliance.category === AIR_CONDITIONERS,
  );
  // Check that at least one air conditioner is found
  if (airConditioners.length > 0) {
    // Calculate the cubic weight of air conditioners
    const weightsArray = airConditioners.map((airConditioner: Appliance) => {
      const { width, length, height } = airConditioner.size;
      return calculateCubicWeight(width, length, height);
    });
    const sumOfAllWeights = weightsArray.reduce((prev:number, current:number) => prev + current);
    const avgOfAllWeights = sumOfAllWeights / weightsArray.length;
    // Calculate the average of all weights
    return avgOfAllWeights;
  }
  return undefined;
};

export default findAirConditionersAvg;
