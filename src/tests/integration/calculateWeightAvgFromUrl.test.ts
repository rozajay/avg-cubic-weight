import calculateWeightAvgFromUrl from '../../utils/calculateWeightAvgFromUrl';

const baseUrl = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com';
describe('Find all air conditioners avg cubic weight from array', () => {
  it.each([
    [`${baseUrl}/api/products/1`, { avgCubitWeight: 21.777160000000002, next: `${baseUrl}/api/products/2` }],
    [`${baseUrl}/api/products/2`, { avgCubitWeight: undefined, next: `${baseUrl}/api/products/a` }],
  ])('Successfully calculate the avg weight for a given url', async (url, expected) => {
    const data = await calculateWeightAvgFromUrl(url);
    expect(data).toEqual(expected);
  });

  it('Throw error if url is invalid', async () => {
    const data = await calculateWeightAvgFromUrl('randomString');
    expect(data).toEqual('Network Error');
  });
});
