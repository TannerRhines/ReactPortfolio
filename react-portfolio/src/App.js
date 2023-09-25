import Navbar from "./Components/NavBar";

import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import { Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';

import BackgroundVideo from './assets/skyVideo.mp4';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
