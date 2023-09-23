import { Link } from "react-router-dom";

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

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
