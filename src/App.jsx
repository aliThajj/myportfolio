import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";

import WelcomePage from "./pages/WelcomePage";
import { AnimatePresence } from 'framer-motion';

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
          <h1 className="text-center text-white mt-10">Mwah 😘</h1>
        </>
      )}
    </>
  );
};



function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="myportfolio/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;