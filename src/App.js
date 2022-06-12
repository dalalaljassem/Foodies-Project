import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Recipe from "./components/Recipe";
import RecipeCat from "./components/RecipeCat";
import TheNavBar from "./components/TheNavBar";
<<<<<<< HEAD
//import { LinkContainer } from "react-router-bootstrap";

=======
>>>>>>> b8942007ccd53b4d7f2515eaa8cb76958ea59bcd
function App() {
  return (
    <div className="App">
      <TheNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Category/:categoryId" element={<RecipeCat />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
