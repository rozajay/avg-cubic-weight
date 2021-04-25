import findBaseUrl from '../../utils/findBaseUrl';

const baseUrl = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com';

describe('Find base url', () => {
  it.each([
    ['http://www.google.com/hello', 'http://www.google.com'],
    [`${baseUrl}/api/products/1`, baseUrl],
  ])('Successfully find all the AC and their respective weight', (url, expected) => {
    expect(findBaseUrl(url)).toEqual(expected);
  });
  it('Return undefined on empty string', () => {
    expect(findBaseUrl('')).toEqual(undefined);
  });
});
