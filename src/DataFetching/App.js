import { useState, useTransition } from "react";
import ExpensiveApp from "../Expensive/ExpensiveApp";
import Post from "./Post";
import Search from "./Search";

export default function App() {
  const [page, setPage] = useState({ title: "search" });
  const [isPending, startTransition] = useTransition({ timeoutMs: 1000 });
  return (
    <>
      <nav className="m-5">
        <button
          className="mr-5 text-blue-500"
          onClick={() => setPage({ title: "search" })}
        >
          FetchingData
        </button>
        <button
          className="mr-5 text-blue-500"
          onClick={() => setPage({ title: "expensive-component" })}
        >
          ExpensiveComponent
        </button>
      </nav>
      {page.title === "search" && (
        <Search
          setPage={(data) => {
            startTransition(() => setPage(data));
          }}
        />
      )}
      {page.title === "post" && (
        <div className={isPending ? "opacity-60" : ""}>
          <Post id={page.params.id} />
        </div>
      )}
      {page.title === "expensive-component" && <ExpensiveApp />}
    </>
  );
}
