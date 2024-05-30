import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Berita from "./pages/Berita";
import Tentang from "./pages/Tentang";
import Layanan from "./pages/Layanan";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Beranda />
    </>
  );
}

export default App;
