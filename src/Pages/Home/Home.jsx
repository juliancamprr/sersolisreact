import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import { Routes, Route } from "react-router-dom";


import About from "../About/About";
import Services from "../Services/Services";

function Home() {
  return (
    <body>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
      </Routes>
    </body>
  );
}

export default Home;
