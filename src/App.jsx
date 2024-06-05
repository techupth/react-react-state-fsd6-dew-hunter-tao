import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, getGreeting] = useState("Greeting Message");
  
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button
          onClick={() => {
            getGreeting('สวัสดี!');
          }}
        >
          สวัสดี!
        </button>
        <button onClick={() => {
            getGreeting('Hi!');
          }}>Hi!</button>
        <button onClick={() => {
            getGreeting('你好!');
          }}>你好!</button>
      </div>
    </div>
  );
}

export default App;
