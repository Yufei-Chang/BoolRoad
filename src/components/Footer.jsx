import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-white text-center py-3 fixed-bottom" style={{ backgroundColor: "#031D44" }}>
      <div className="container">
        <p className="mb-1">
          <a href="/contacts" className="text-white mx-2">Contatti</a> |
          <a href="/sponsors" className="text-white mx-2">Sponsors</a> |
          <a href="/jobs" className="text-white mx-2">Lavora con noi</a> |
          <a href="/community" className="text-white mx-2">Community</a> |
          <a href="/info" className="text-white mx-2">Info Utili</a>
        </p>
        <p className="mb-0">© 2025 BoolRoad Agenzia Viaggi - Tutti i diritti riservati</p>
      </div>
    </footer>
  );
};

export default Footer;
