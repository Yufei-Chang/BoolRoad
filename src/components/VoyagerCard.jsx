import React from "react";
import { Link } from "react-router-dom";

const VoyagerCard = ({ id }) => {
  return (
    <div className="card shadow-sm p-3">
      <h5 className="card-title text-center">Nome: {"____"} Cognome: {"____"}</h5>
      <p className="text-center">Email: {"____"}</p>
      <div className="d-flex justify-content-center">
        <Link to={`/voyager-details/${id}`} className="btn btn-primary">
          Dettagli
        </Link>
      </div>
    </div>
  );
};

export default VoyagerCard;
