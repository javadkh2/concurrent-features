import fetcher from "../api";

const cache = {};
const useQuery = (key) => {
  if (cache[key]) return cache[key];
  throw fetcher(key).then((data) => {
    cache[key] = data;
  });
};

export default useQuery;
