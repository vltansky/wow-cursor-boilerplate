import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <button
        onClick={() => setCount((count) => count + 1)}
        className="rounded-md bg-primary mt-5 px-4 py-2 text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
