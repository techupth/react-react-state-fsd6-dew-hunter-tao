import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMsg, setGreetMsg] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="buttons">
        <button
          onClick={function () {
            return setGreetMsg("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button onClick={() => setGreetMsg("Hi!")}>Hi!</button>
        <button onClick={() => setGreetMsg("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
