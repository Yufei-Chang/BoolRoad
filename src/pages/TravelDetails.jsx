import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoyagerCard from "../components/VoyagerCard";

const TravelDetails = () => {
  const { id } = useParams();

  // Dati dinamici (per ora vuoti)
  const travel = {
    destination: "",
    guide: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  return (
    <>
      <Header />
      <div className="container my-5 py-5 container-fluid" style={{ maxWidth: "80vw", margin: "0 auto" }}>
        {/* Card Dettagli Viaggio */}
        <div className="card p-4 shadow-lg">
          <h2 className="text-center">Destinazione: {travel.destination || "____"}</h2>
          <p><strong>Guida:</strong> {travel.guide || "____"}</p>
          <p><strong>Data:</strong> {travel.startDate || "__/__/____"} - {travel.endDate || "__/__/____"}</p>
          <p className="travel-description">
            <strong>Descrizione dettagliata:</strong>
            <br /> - Principali tappe: {travel.description || "____"}
          </p>
        </div>

        {/* Divisore */}
        <hr className="my-5 w-75 mx-auto" />

        {/* Sezione Partecipanti */}
        <h2 className="text-center my-4">I partecipanti di questo viaggio</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {[...Array(10)].map((_, index) => (
            <div className="col" key={index}>
              <VoyagerCard id={index + 1} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TravelDetails;
