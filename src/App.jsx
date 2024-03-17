import { useState } from "react";
import "./App.css";
import "./index.css";
import Tasks from "./Tasks";
import Filter from "./Filter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-white text-6xl absolute mr-4">
        to<span className="text-purple-400">do</span>
      </h1>
      <br />
      <br />
      <br />
      <Tasks />
      <Filter />
    </>
  );
}

export default App;
