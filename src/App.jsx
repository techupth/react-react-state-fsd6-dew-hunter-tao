import "./App.css";
import { useState } from "react";

function App() {
const [greetingMessage,setGreetingMessage] = useState("Greeting Message");
const switchToThai = () => {
  setGreetingMessage("สวัสดี!");
};
const switchToEng = () => {
  setGreetingMessage("Hi!");
};
const switchToCh = () => {
  setGreetingMessage("你好!");
};

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick ={switchToThai}>สวัสดี!</button>
        <button onClick ={switchToEng}>Hi!</button>
        <button onClick ={switchToCh}>你好!</button>
      </div>
    </div>
  );
}

export default App;
