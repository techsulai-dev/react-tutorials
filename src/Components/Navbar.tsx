import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <Link to="/" className="nav-item">Home List of contents</Link>
      <Link to="/useState-useEffect">UseState & UseEffect</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/routing">Routing</Link>
    </nav>
  );
};

export default Navbar;