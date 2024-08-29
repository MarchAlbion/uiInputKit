import { useState } from "react";
import "./App.css";
import InputGroup from "./components/InputGroup/InputGroup";

function App() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <InputGroup
          value={value}
          onChange={handleChange}
          label="Email"
          placeholder="Input..."
          hint="This is a hint"
          infoIcon
          size='xl'
          tooltip='This is a tooltip'
          searchIcon
          helpIcon
        />
      </div>
    </div>
  );
}

export default App;
