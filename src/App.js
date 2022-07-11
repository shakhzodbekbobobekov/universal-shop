//styles
import Home from "./home/Home";
import Recipe from "./recipe/Recipe";
import Navbar from "./components/Navbar";
import Create from "./create/Create";
import Search from "./search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
