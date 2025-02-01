import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const VoyagerDetails = () => {
  const { id } = useParams(); // Otteniamo l'ID del viaggiatore dalla URL
  const navigate = useNavigate();

  // Convertiamo l'ID in numero per la gestione della navigazione
  const voyagerId = parseInt(id, 10);

  // Simuliamo dati dei viaggiatori (in futuro arriveranno dal backend)
  const mockVoyagers = [
    { id: 1, name: "Luca", surname: "Bianchi", phone: "", email: "", taxCode: "" },
    { id: 2, name: "Giulia", surname: "Verdi", phone: "", email: "", taxCode: "" },
    { id: 3, name: "Marco", surname: "Neri", phone: "", email: "", taxCode: "" },
    { id: 4, name: "Elena", surname: "Rossi", phone: "", email: "", taxCode: "" }
  ];

  // Troviamo il viaggiatore attuale
  const voyager = mockVoyagers.find(v => v.id === voyagerId);

  // Funzioni di navigazione
  const goToPreviousVoyager = () => {
    const prevId = voyagerId > 1 ? voyagerId - 1 : mockVoyagers.length;
    navigate(`/voyager-details/${prevId}`);
  };

  const goToNextVoyager = () => {
    const nextId = voyagerId < mockVoyagers.length ? voyagerId + 1 : 1;
    navigate(`/voyager-details/${nextId}`);
  };

  const goBackToTravelDetails = () => {
    navigate(-1); // Torna alla pagina precedente (TravelDetails)
  };

  const styles = {
    voyagerDetailsCard: {
      width: "600px",
      display: "flex",
      alignItems: "center",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white"
    },
    voyagerImgContainer: {
      width: "30%",
      paddingRight: "20px"
    },
    voyagerImg: {
      width: "100%",
      height: "auto",
      borderRadius: "8px"
    },
    voyagerInfo: {
      flex: 1
    },
    voyagerCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      transition: "transform 0.2s ease-in-out",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
      cursor: "pointer"
    }
  };
  
  // Se il viaggiatore non viene trovato
  if (!voyager) {
    return (
      <>
        <Header />
        <div className="container text-center mt-5">
          <h2>⚠️ Viaggiatore non trovato!</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>

        {/* Card dettagli viaggiatore */}
        <div className="card" style={styles.voyagerDetailsCard}>
          {/* Immagine a sinistra */}
          <div style={styles.voyagerImgContainer}>
            <img src="/images/default-avatar.png" alt="Foto Viaggiatore" style={styles.voyagerImg} />
          </div>

          {/* Dati a destra */}
          <div style={styles.voyagerInfo}>
            <h3>{voyager.name} {voyager.surname}</h3>
            <p><strong>Telefono:</strong> {voyager.phone || "N/D"}</p>
            <p><strong>Email:</strong> {voyager.email || "N/D"}</p>
            <p><strong>Codice Fiscale:</strong> {voyager.taxCode || "N/D"}</p>
          </div>
        </div>

        {/* Sezione bottoni */}
        <div className="d-flex justify-content-between w-100 mt-4">
          <button className="btn btn-primary" onClick={goToPreviousVoyager}>Precedente</button>
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>Indietro</button>
          <button className="btn btn-primary" onClick={goToNextVoyager}>Successivo</button>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default VoyagerDetails;
