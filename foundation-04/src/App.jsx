import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [value, setValue] = useState(5);
 

  const increase = () => {
    setValue(value + 1); 
  };

  const decrement = () => {
    setValue(value - 1); 
  };

  return (
    <>
      <div>
        <h1>Value: {value}</h1>
        <button onClick={increase}>increase</button>
        <button onClick={decrement}>decrease</button>
      </div>
    </>
  );
}

export default App;
