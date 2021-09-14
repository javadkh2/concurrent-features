import fetcher from ".";

const cache = {};
const query = (key) => {
  if (cache[key]) return { data: cache[key] };
  throw fetcher(key).then((data) => {
    cache[key] = data;
  });
};

export const preFetch = (key) => {
  if (cache[key]) return Promise.resolve();
  return fetcher(key).then((data) => {
    cache[key] = data;
  });
};

export default query;
