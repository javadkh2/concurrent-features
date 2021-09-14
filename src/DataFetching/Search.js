import { Suspense, useState, useTransition } from "react";
import query from "../api/query";
import Input from "../Components/Input";
import Loading from "../Components/Loading";

function PostList({ setPage, search }) {
  const { data: posts } = query(`/posts?keyword=${search}`);
  return (
    <>
      {posts.map(({ id, title }) => (
        <h3
          key={id}
          onClick={() => {
            setPage({
              title: "post",
              params: { id },
            });
          }}
          // onMouseEnter={() => {
          //   preFetch(`/posts/${id}`);
          // }}
          className="rounded-sm inline-block m-2 bg-gray-200 p-4 w-80 hover:bg-gray-400"
        >
          {title}
        </h3>
      ))}
    </>
  );
}

export default function Search({ setPage }) {
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();
  return (
    <div className="m-3">
      <h1 className="font-bold text-xl m-2">Data fetching example</h1>
      <Input
        onChange={(value) => {
          // setSearch(value);
          startTransition(() => setSearch(value));
        }}
      />
      {isPending && "fetching...."}
      <div className={isPending ? "opacity-60" : ""}>
        <Suspense fallback={<Loading> Suspense Fetching...</Loading>}>
          <PostList setPage={setPage} search={search} />
        </Suspense>
      </div>
    </div>
  );
}
