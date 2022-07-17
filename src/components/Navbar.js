import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Select from "../select/Select";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Shopping</h1>
        </Link>
        <Select />
        <Searchbar />
        <Link to="/create">Create Now</Link>
      </nav>
    </div>
  );
}

export default Navbar;
