import React from "react";
import TravelCard from "./TravelCard";

const PastTrip = () => {
  const trips = [
    {
      destination: "Londra",
      guide: "Giovanni Bianchi",
      startDate: "05/01/2024",
      endDate: "15/01/2024",
      imagePath: "/images/travel.jpg",
      detailsLink: "/dettagli-viaggio-londra",
    },
    {
      destination: "New York",
      guide: "Luca Verdi",
      startDate: "20/11/2023",
      endDate: "30/11/2023",
      imagePath: "/images/travel.jpg",
      detailsLink: "/dettagli-viaggio-newyork",
    },
  ];

  return (
    <div className="past-trips-container">
      {trips.map((trip, index) => (
        <div key={index} className="col-md-5">
          <TravelCard {...trip} />
        </div>
      ))}
    </div>
  );
};

export default PastTrip;
