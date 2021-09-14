import { Suspense } from "react";
import useSWR from "swr";
import Loading from "../Components/Loading";

function User({ id }) {
  const { data: user } = useSWR(`/users/${id}`);
  return (
    <div>
      <h2 className="border-b pb-1 mb-2">{user.username}</h2>
    </div>
  );
}

function Post({ id }) {
  const { data: post } = useSWR(`/posts/${id}`);
  return (
    <div className="m-5">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <Suspense fallback={<Loading>Loading user...</Loading>}>
        <User id={post.author} />
      </Suspense>
      <p className="italic">{post.content}</p>
    </div>
  );
}

function Comments({ id }) {
  const { data: comments } = useSWR(`/comments/${id}`);
  return (
    <ul className="">
      {comments.map(({ comment }) => (
        <li className="bg-gray-200 m-5 p-4">{comment}</li>
      ))}
    </ul>
  );
}

export default function postPage({ id }) {
  return (
    <>
      <Suspense fallback={<Loading>{`Loading post #${id}`}</Loading>}>
        <Post id={id} />
      </Suspense>
      <Suspense
        fallback={<Loading>{`Loading comments for post #${id}`}</Loading>}
      >
        <Comments id={id} />
      </Suspense>
    </>
  );
}
