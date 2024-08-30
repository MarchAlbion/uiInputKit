import { useState } from "react";
import "./App.css";
import InputGroup from "./components/InputGroup/InputGroup";

function App() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleBlur = (e: any) => {
    console.log(e);
  };
  const handleSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <div className="App">
      <div>
        <InputGroup
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
          onFocus={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          label="Email"
          placeholder="Input..."
          hint="This is a hint"
          infoIcon
          size="xs"
          tooltip="This is a tooltip"
          searchIcon
          helpIcon
          type="text"
          required
          error
        />
      </div>
    </div>
  );
}

export default App;
