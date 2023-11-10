import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Pages/Home";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element />
      </Routes>
    </Router>
  );
}

export default App;
