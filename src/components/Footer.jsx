export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              <i className="bi bi-house-door me-1"></i>Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              <i className="bi bi-envelope me-1"></i>Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              <i className="bi bi-info-circle me-1"></i>About
            </a>
          </li>
        </ul>
        <p className="text-center text-white">
          © 2025 Booroad <i className="bi bi-airplane"></i>
        </p>
      </div>
    </footer>
  );
}
