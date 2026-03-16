import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <NavLink to="/" className="nav-item">Home</NavLink>
      <Link to="/react-basics">React Basics</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/routing">Routing</Link>
    </nav>
  );
};

export default Navbar;