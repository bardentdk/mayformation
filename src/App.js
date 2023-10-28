import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./input.css";
import NosFormations from "./Pages/NosFormations/NosFormations";
import NosValeurs from "./Pages/NosValeurs/NosValeurs";
import Equipe from './Pages/Equipe/Equipe';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mayformations" element={<Home />} />
          <Route path="/mayformation" element={<Home />} />
          <Route path="/nos-valeurs" element={<NosValeurs />} />
          <Route path="/catalogue" element={<NosFormations />} />
          <Route path="/team" element={<Equipe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
