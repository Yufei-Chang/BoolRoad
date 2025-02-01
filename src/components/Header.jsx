import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#031D44" }}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/BoolRoad_Logo.webp" alt="Logo" style={{ height: "50px" }} />
        </Link>

        {/* Link di navigazione */}
        <div className="navbar-nav ms-auto d-flex flex-row">
          <Link to="/" className="nav-link mx-3">Home</Link>
          <Link to="/your-trips" className="nav-link mx-3">I tuoi viaggi</Link>
          <Link to="/travelers" className="nav-link mx-3">Viaggiatori</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
