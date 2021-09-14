import { useState } from "react";

export default function Input({ onChange }) {
  const [value, setValue] = useState("");
  return (
    <input
      className="border rounded-sm px-3 py-2 w-80 m-2"
      type="input"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        if (onChange) onChange(e.target.value);
      }}
    />
  );
}
