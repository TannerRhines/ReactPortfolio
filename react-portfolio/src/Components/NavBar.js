import { Link, useLocation } from "react-router-dom";


import '../assets/styles/NavBar.css';

function CustomLink({ to, children, ...props }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="tanner-site">
        Tanner Rhines
      </Link>

      <ul>
        <CustomLink to="/about">about</CustomLink>
        <CustomLink to="/portfolio">portfolio</CustomLink>
        <CustomLink to="/contact">contact</CustomLink>
        <CustomLink to="/resume">resume</CustomLink>
      </ul>
    </nav>
  );
}
