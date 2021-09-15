import { useState } from "react";
import Input from "../Components/Input";
import ExpensiveResult from "./ExpensiveResult";

function ExpensiveApp() {
  const [search, setSearch] = useState("");
  return (
    <div className="m-3">
      <h1 className="font-bold text-xl m-2">Expensive component example</h1>
      <Input
        onChange={(value) => {
          setSearch(value);
        }}
      />
      <div>
        <ExpensiveResult search={search} />
      </div>
    </div>
  );
}

export default ExpensiveApp;
