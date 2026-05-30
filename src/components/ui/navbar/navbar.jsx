import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">Iron Heroes</Link>
        <div className="navbar-nav me-auto">
          <NavLink className="nav-link" to="/heroes"><i className="fa fa-users" aria-hidden="true"></i> Heroes</NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/register">Register</NavLink>
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
