import findAirConditionersAvg from '../utils/findAirConditionersAvg';
import { objectsArrayWithAC, objectsArrayWithoutAC } from './testData';

describe('Find all air conditioners avg cubic weight from array', () => {
  it.each([[objectsArrayWithAC, 21.777160000000002], [objectsArrayWithoutAC, undefined]])('Successfully find all the AC and their respective weight', (inputObjectsArray, expected) => {
    expect(findAirConditionersAvg(inputObjectsArray)).toEqual(expected);
  });
});
