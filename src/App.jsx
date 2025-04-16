import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import WelcomePage from "./pages/WelcomePage";
import Navbar from "./components/Navbar";
import Home from "./sections/Home/Home.jsx";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
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
          <Home/>
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
        <Route path="myportfolio/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;