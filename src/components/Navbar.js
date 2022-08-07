import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Select from "../select/Select";
import { useTheme } from "../components/hooks/useTheme";
function Navbar({ setCategoryAll }) {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Shopping</h1>
        </Link>
        <Select setCategoryAll={setCategoryAll} />
        <Searchbar />
        <Link to="/create">Create Now</Link>
      </nav>
    </div>
  );
}

export default Navbar;
