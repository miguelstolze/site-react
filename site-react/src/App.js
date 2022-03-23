import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import NavBar from "./componets/LayOut/NavBar";
import Footer from "./componets/LayOut/footer";

function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        <Route path="/Empresa" element={<Empresa />}>
        
        </Route>
        <Route path="/Contato" element={<Contato />}>
         
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
