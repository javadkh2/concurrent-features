import { useState, useTransition } from "react";
import { SWRConfig } from "swr";
import fetcher from "../api";
import Post from "./Post";
import Search from "./Search";

export default function App() {
  const [page, setPage] = useState({ title: "search" });
  const [, startTransition] = useTransition({ timeoutMs: 40000 });
  return (
    <SWRConfig
      value={{
        fetcher,
        suspense: true,
      }}
    >
      <nav className="m-5">
        <button onClick={() => setPage({ title: "search" })}>Home</button>
      </nav>
      {page.title === "search" && (
        <Search
          setPage={(data) => {
            startTransition(() => {
              setPage(data);
            });
          }}
        />
      )}
      {page.title === "post" && <Post id={page.params.id} />}
    </SWRConfig>
  );
}
