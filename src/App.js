import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import LegalTerms from "./pages/LegalTerms";
import Home from "./pages/Home";
import { Fragment } from "react";
import References from "./pages/References";
import Discussions from "./pages/Discussions";

function App() {
  return (
    <>
      <Router>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/discussions" element={<Discussions />}></Route>
          <Route path="/references" element={<References />}></Route>
          <Route path="/legal-terms" element={<LegalTerms />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
