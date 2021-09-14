import fetcher from "../api";

const cache = {};
const query = (key) => {
  if (cache[key]) return { data: cache[key] };
  throw fetcher(key).then((data) => {
    cache[key] = data;
  });
};

export default query;
