import { useState, useTransition } from "react";
import Input from "../Components/Input";
import ExpensiveResult from "./ExpensiveResult";

function App() {
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();
  return (
    <div className="m-4">
      <Input
        onChange={(value) => {
          startTransition(() => {
            setSearch(value);
          });
        }}
      />
      {isPending && "loading..."}
      <div>
        <ExpensiveResult search={search} />
      </div>
    </div>
  );
}

export default App;
