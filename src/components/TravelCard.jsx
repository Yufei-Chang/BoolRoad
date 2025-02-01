import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TravelCard = ({ id, destination, guide, startDate, endDate }) => {
  return (
    <div className="card shadow-sm p-3 text-center">
      <h5 className="fw-bold">{destination || "Destinazione: ___"}</h5>
      <p><strong>Guida:</strong> {guide || "___"}</p>
      <p><strong>Data:</strong> {startDate || "__/__/____"} - {endDate || "__/__/____"}</p>
      <Link to={`/travel-details/${id}`} className="btn btn-primary mt-2">Dettagli</Link>
    </div>
  );
};

export default TravelCard;
