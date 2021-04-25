import axios from 'axios';
import calculateWeightAvgFromUrl from '../../utils/calculateWeightAvgFromUrl';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Find all air conditioners avg cubic weight from array', () => {
  it('Data containing Air Conditionders', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        objects: [{
          category: 'Air Conditioners',
          title: 'title',
          weight: 60,
          size: {
            width: 8.7,
            length: 22.7,
            height: 1.5,
          },
        }],
        next: '/api/products/2',
      },
    });
    const data = await calculateWeightAvgFromUrl('http://getresults.com/api/products/1');
    expect(data).toEqual({ avgCubicWeight: 0.07405874999999998, next: 'http://getresults.com/api/products/2' });
  });

  it('Data doesn not containing Air Conditionders', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        objects: [{
          category: 'Tooth Brush',
          title: 'title',
          weight: 60,
          size: {
            width: 8.7,
            length: 22.7,
            height: 1.5,
          },
        }],
        next: '/api/products/2',
      },
    });
    const data = await calculateWeightAvgFromUrl('http://getresults.com/api/products/1');
    expect(data).toEqual({ avgCubicWeight: undefined, next: 'http://getresults.com/api/products/2' });
  });

  it('Data doesn not containing objects field', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        next: '/api/products/2',
      },
    });
    const data = await calculateWeightAvgFromUrl('http://getresults.com/api/products/1');
    expect(data).toBe('Apliances not found in response');
  });

  it('Data doesn not containing next url', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        objects: [{
          category: 'Tooth Brush',
          title: 'title',
          weight: 60,
          size: {
            width: 8.7,
            length: 22.7,
            height: 1.5,
          },
        }],
      },
    });
    const data = await calculateWeightAvgFromUrl('http://getresults.com/api/products/1');
    expect(data).toBe('Next url not found in response');
  });
});
