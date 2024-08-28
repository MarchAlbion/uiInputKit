import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <Input
          value={value}
          onChange={handleChange}
          label="Email"
          placeholder="Input..."
          required
          hint="This is a hint"
        />
        <Input
          value={value}
          onChange={handleChange}
          label="Email"
          placeholder="Input..."
          required
        />
      </div>
    </div>
  );
}

export default App;
