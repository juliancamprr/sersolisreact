import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route Component={Home} />
          <Route component={About} />
          <Route component={Services} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
