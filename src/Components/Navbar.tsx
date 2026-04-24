import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-item">Home List of contents</Link>
      <Link to="/useState-useEffect">UseState & UseEffect</Link>
      <Link to="/UseContext">UseContext</Link>
      <Link to="/routing">Routing</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar; 