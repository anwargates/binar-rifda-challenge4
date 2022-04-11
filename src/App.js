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
import Result from "./content/result/Result";
import CarDetail from "./content/result/CarDetail";

function App() {
  return (
    <>
    <Nav />
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/cari_mobil" element={<Cari_Mobil/>} />
          <Route exact path="/cari_mobil/detail/:idCar" element={<CarDetail />} />
          {/* <Route exact path="/cari_mobil/list_mobil" element={
          <>
          <Cari_Mobil/>
          <Result/>
          </>} /> */}
        </Routes>
    </Router>
    <Footer/>
    </>
  );
}


export default App;
