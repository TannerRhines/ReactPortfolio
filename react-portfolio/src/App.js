import Navbar from "./Components/NavBar";

import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import { Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
        <source src={process.env.PUBLIC_URL + '/skyVideo.mp4'} type="video/mp4" />

  Your browser does not support the video tag.
</video>

        </div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<About />} /> {/* Catch all undefined routes and redirect to About */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;