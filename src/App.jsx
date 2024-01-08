import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import About from "./pages/About";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listing/:id" element={<Listing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
