const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const random = (max) => Math.floor(Math.random() * max * 1000) + 1;

async function getPosts(keyword = "") {
  console.log("getPosts", keyword);
  await sleep(random(3));
  return Array(20)
    .fill(null)
    .map((_, idx) => {
      const id = idx + 1;
      return {
        id,
        title: `post #${id} - ${keyword}`,
      };
    });
}

async function getPost(id) {
  console.log("getPost", id);
  await sleep(random(1));
  return {
    id,
    title: `post #${id}`,
    author: random(100),
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  };
}

async function getUser(id) {
  console.log("getUser", id);
  await sleep(random(1));
  return {
    id,
    username: `user${id}@email.com`,
    avatar: "",
  };
}

async function getComments(postId) {
  console.log("getComments", postId);
  await sleep(random(2));
  return Array(random(10))
    .fill(null)
    .map(() => {
      return {
        comment: `post #${postId} - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      };
    });
}

export default async function fetcher(url) {
  console.info("fetch:", url);
  const [route, qs] = url.split("?");
  const [, path, id] = route.split("/");
  const searchParams = new URLSearchParams(qs);
  console.log(route, path, id);
  if (route === "/posts") {
    return getPosts(searchParams.get("keyword"));
  }
  if (path === "posts") {
    return getPost(id);
  }
  if (path === "users") {
    return getUser(id);
  }
  if (path === "comments") {
    return getComments(id);
  }
}
