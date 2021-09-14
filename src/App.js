import { useState, useTransition } from "react";
import ExpensiveResult from "./ExpensiveResult";

function Input({ onChange }) {
  const [value, setValue] = useState("");
  return (
    <input
      type="input"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        if (onChange) onChange(e.target.value);
      }}
      className="border rounded-sm px-3 py-2 w-80 m-2"
    />
  );
}

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
