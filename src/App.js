import { useState } from "react";
import ExpensiveResult from "./ExpensiveResult";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="m-4">
      <input
        type="input"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="border rounded-sm px-3 py-2 w-80 m-2"
      />
      <div className="">
        <ExpensiveResult search={search} />
      </div>
    </div>
  );
}

export default App;
