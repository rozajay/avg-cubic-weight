import axios, { AxiosResponse } from 'axios';
import findAirConditionersAvg from './findAirConditionersWeightAvg';
import { CalculationData } from '../types/appTypes';
import findBaseUrl from './findBaseUrl';

const calculateWeightAvgFromUrl = async (
  url: string,
):Promise<CalculationData|undefined> => {
  try {
    // Get from URL
    const res = await axios.get(url).then((response: AxiosResponse) => {
      const { objects, next } = response.data;
      const baseUrl = findBaseUrl(url);
      if (objects) {
        const avgCubicWeight = findAirConditionersAvg(objects);
        return { avgCubicWeight, next: next ? baseUrl + next : next };
      }
      throw Error('Apliances not found in response');
    });
    return res;
  } catch (error) {
    return error.message;
  }
};

export default calculateWeightAvgFromUrl;
