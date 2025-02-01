import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const VoyagerCard = ({ id, name, surname }) => {
    return (
      <div className="card shadow-sm p-3">
        <h5 className="fw-bold">{name} {surname}</h5>
        <Link to={`/voyager-details/${id}`} className="btn btn-primary mt-2">
          Dettagli
        </Link>
      </div>
    );
  };

export default VoyagerCard;
