import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>*</span>

        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <span style={{ color: darkMode ? "yellow" : "grey" }}>☽</span>
        <Card />
      </div>
    </div>
  );
}

export default App;
