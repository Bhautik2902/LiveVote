import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import CreatePollPage from "./pages/PollCreatePage.jsx";


function App() {
 
  return (
    <div className="app-container">
      <Routes>
        <Route path="/login" element={<LandingPage />} />

        <Route element={<Layout />}>   {/* Dashboard Layout */}
            <Route path="/" element={<HomePage />} />
            <Route path="/createPoll" element={<CreatePollPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
