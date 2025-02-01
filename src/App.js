import { useState } from "react";
import Clock from "./components/Clock";

function App() {

  const [time, setTime] = useState(new Date());
  const [labs, setLabs] = useState([]);

  function handleLabs() {
    setLabs([...labs, time.toLocaleTimeString()]);
  }

  return (
    <div className="app">
      <Clock time={time} setTime={setTime} />
      <button className="btn" onClick={handleLabs}>Click</button>
      {labs.map((lab) => (
        <p key={lab}>{lab}</p>
      ))}
    </div>
  );
}

export default App;
