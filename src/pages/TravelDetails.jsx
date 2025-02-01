import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoyagerCard from "../components/VoyagerCard";
import "bootstrap/dist/css/bootstrap.min.css";

const TravelDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        
        {/* Card Dettagli Viaggio */}
        <section className="text-center">
          <h2 className="mb-4">Dettagli Viaggio</h2>
          <div className="mx-auto card p-4 shadow" style={{ maxWidth: "600px" }}>
            <h3>Destinazione: {id}</h3>
            <p><strong>Guida:</strong> Mario Rossi</p>
            <p><strong>Data:</strong> 01/02/2025 - 10/02/2025</p>
            <p><strong>Descrizione:</strong> Tour della città e visita ai musei</p>
          </div>
        </section>

        <hr className="my-5" />

        {/* Partecipanti */}
        <section>
          <h2 className="text-center mb-4">I partecipanti di questo viaggio</h2>
          <div className="row row-cols-2 g-4">
            <VoyagerCard id={1} name="Marco" surname="Rossi" />
            <VoyagerCard id={2} name="Laura" surname="Bianchi" />
            <VoyagerCard id={3} name="Giovanni" surname="Neri" />
            <VoyagerCard id={4} name="Anna" surname="Verdi" />
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default TravelDetails;
