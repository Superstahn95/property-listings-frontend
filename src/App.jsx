import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
