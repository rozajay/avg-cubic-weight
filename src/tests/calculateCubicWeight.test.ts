import calculateCubicWeight from '../utils/calculateCubicWeight';

describe('Calculate cubic weight', () => {
  it('Successful calculation', () => {
    expect(calculateCubicWeight(40, 20, 30, 250)).toEqual(6);
  });
});
