import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function VoyagerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const voyagerId = parseInt(id, 10);

  // Dati dinamici vuoti
  const voyager = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    fiscalCode: "",
  };

  return (
    <>
      <Header />
      <div className="container my-5 py-5 container-fluid" style={{ maxWidth: "80vw", margin: "0 auto" }}>
        {/* Card con i Dettagli del Viaggiatore */}
        <div className="card p-4 shadow-lg text-center">
          <div className="row">
            {/* Foto a sinistra */}
            <div className="col-md-4 d-flex align-items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Foto Viaggiatore"
                className="img-fluid rounded"
              />
            </div>
            {/* Dettagli a destra */}
            <div className="col-md-8 text-start">
              <h2>{voyager.firstName || "____"} {voyager.lastName || "____"}</h2>
              <p><strong>Telefono:</strong> {voyager.phone || "____"}</p>
              <p><strong>Email:</strong> {voyager.email || "____"}</p>
              <p><strong>Codice Fiscale:</strong> {voyager.fiscalCode || "____"}</p>
            </div>
          </div>
        </div>

        {/* Pulsanti di Navigazione */}
        <div className="d-flex justify-content-between mt-4">
          <NavLink
            className="btn btn-primary"
            to={`/voyager-details/${voyagerId - 1}`}
            disabled={voyagerId <= 1}
          >
            Precedente
          </NavLink>
          <NavLink className="btn btn-secondary" onClick={() => navigate(-1)}>
            Indietro
          </NavLink>
          <NavLink
            className="btn btn-primary"
            to={`/voyager-details/${voyagerId + 1}`}
          >
            Successivo
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VoyagerDetails;
