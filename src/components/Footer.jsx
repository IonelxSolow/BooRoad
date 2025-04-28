import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-white">
              <i className="bi bi-house-door me-1"></i>Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link px-2 text-white">
              <i className="bi bi-envelope me-1"></i>Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link px-2 text-white">
              <i className="bi bi-info-circle me-1"></i>About
            </NavLink>
          </li>
        </ul>
        <p className="text-center text-white">
          © 2025 Booroad <i className="bi bi-airplane"></i>
        </p>
      </div>
    </footer>
  );
}
