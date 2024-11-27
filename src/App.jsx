import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Leaderboard from "./pages/leaderboard";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signUp";
import Signin from "./pages/signIn";
import Navbar from "./_components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
