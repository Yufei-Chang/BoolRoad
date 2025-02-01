import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TravelDetails from "./pages/TravelDetails";
import VoyagerDetails from "./pages/VoyagerDetails"; // Importiamo la nuova pagina

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/travel-details/:id" element={<TravelDetails />} />
        <Route path="/voyager-details/:id" element={<VoyagerDetails />} /> {/* NUOVA ROTTA */}
        </Routes>
    </Router>
  );
}

export default App;
