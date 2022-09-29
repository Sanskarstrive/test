import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Country from "./pages/Country";
import { useCallback, useState } from "react";

function App() {
  // ** states
  const [number, setNumber] = useState(3);
  const [reversedNumber, setReversedNumber] = useState(4);

  // ** function uses two states to change the value
  const reverses = (data) => {
    setNumber(
      reversedNumber
    ); /* this updates the states with other number other than the displayed one*/
    setReversedNumber(
      data
    ); /** this keeps the value of previos state to update again next time */
  };

  return (
    <div className="App">
      <h1>Test Cases</h1>
      <button
        onClick={() => reverses(number)}
        style={{ padding: "0.5rem  2rem", color: "red", marginBottom: "2rem" }}
      >
        {number}
      </button>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;