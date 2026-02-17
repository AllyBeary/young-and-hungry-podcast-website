import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/young-and-hungry-logo.jpg";

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav">

        {/* BRAND */}
        <Link to="/" className="brand">
          <img src={logo} alt="Young & Hungry logo" className="logo" />
          <span className="brand-text">Young & Hungry</span>
        </Link>

        {/* NAV LINKS */}
        <div className="links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "link active" : "link"}>Home</NavLink>
          <NavLink to="/podcast" className={({ isActive }) => isActive ? "link active" : "link"}>Podcast</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"}>About</NavLink>
          <NavLink to="/research" className={({ isActive }) => isActive ? "link active" : "link"}>Research</NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? "link active" : "link"}>Resources</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "link active" : "link"}>Contact</NavLink>
        </div>

      </nav>
    </header>
  );
}

