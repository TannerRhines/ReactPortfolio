
import Navbar from "./NavBar"


import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"


import { Route, Routes } from "react-router-dom"



function App() {
 
  return (
  <>
  <Navbar />
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About />} />
      <Route path="/" element={<Portfolio />} />
      <Route path="/" element={<Contact />} />
      <Route path="/" element={<Resume/>} />
    </Routes>
  </div>
  </>
  )
}



export default App