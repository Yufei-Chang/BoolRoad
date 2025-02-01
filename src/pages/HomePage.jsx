import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TravelCard from "../components/TravelCard";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container my-5 py-5 container-fluid" style={{ maxWidth: "80vw", margin: "0 auto" }}>
        
        {/* Viaggio Attuale */}
        <section className="text-center">
          <h2 className="mb-4">Il tuo viaggio attuale</h2>
          <div className="mx-auto" style={{ maxWidth: "500px" }}>
            <TravelCard id={1} destination="Parigi" guide="Mario Rossi" startDate="01/02/2025" endDate="10/02/2025" />
          </div>
        </section>

        <hr className="my-5" />

        {/* Viaggi Conclusi */}
        <section>
          <h2 className="text-center mb-4">I viaggi conclusi</h2>
          <div className="row row-cols-2 g-4">
            <TravelCard id={2} destination="Londra" guide="Anna Bianchi" startDate="05/03/2025" endDate="12/03/2025" />
            <TravelCard id={3} destination="Tokyo" guide="Yuki Nakamura" startDate="20/04/2025" endDate="30/04/2025" />
            <TravelCard id={4} destination="New York" guide="John Smith" startDate="10/05/2025" endDate="20/05/2025" />
            <TravelCard id={5} destination="Roma" guide="Luca Verdi" startDate="15/06/2025" endDate="25/06/2025" />
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default HomePage;
