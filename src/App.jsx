import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomePage from "./pages/WelcomePage";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/ui/Background.jsx";
import Home from "./sections/Home/Home.jsx";
import About from "./sections/About/About.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';


const MainLayout = ({ showWelcome, setShowWelcome }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomePage onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
        </>
      )}
    </>
  );
};



function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="myportfolio/" element={<MainLayout showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;