import fetcher from ".";

const cache = {};
const query = (key) => {
  if (cache[key]) return { data: cache[key] };
  throw fetcher(key).then((data) => {
    cache[key] = data;
    return data;
  });
};

export const preFetch = (key) => {
  if (cache[key]) return Promise.resolve(cache[key]);
  return fetcher(key).then((data) => {
    cache[key] = data;
    return data;
  });
};

export default query;
