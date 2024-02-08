import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/Navbar";
import Home from "./Component/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Menu from "./Component/Menu";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
