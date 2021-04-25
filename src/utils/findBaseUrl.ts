const findBaseUrl = (
  url: string,
): string|undefined => {
  const baseUrl = url.match(/^.*\.com\s*/);
  if (baseUrl) {
    return baseUrl[0];
  }
  return undefined;
};

export default findBaseUrl;
