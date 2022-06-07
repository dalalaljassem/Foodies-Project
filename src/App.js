import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Home from "./components/Home";
import Category from "./components/Category";
import Recipe from "./components/Recipe";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
