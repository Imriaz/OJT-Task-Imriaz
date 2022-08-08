import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import AllEmployee from "./components/Homepage/AllEmployee";
import AddEmployee from "./components/AddEmployee";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllEmployee />} />
        <Route path="AllEmployee" element={<Homepage />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
