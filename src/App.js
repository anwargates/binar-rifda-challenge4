import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Landing from './content/Landing';
import Cari_Mobil from './content/Cari_Mobil';
import Footer from "./footer/Footer";
import Nav from "./header/Nav";

function App() {
  return (
    <>
    <Nav />
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/cari_mobil" element={<Cari_Mobil/>} />
        </Routes>
    </Router>
    <Footer/>
    </>
  );
}


export default App;
