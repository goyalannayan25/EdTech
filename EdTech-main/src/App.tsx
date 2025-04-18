import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Leaderboard from "./pages/Leaderboard";
import Calendar from "./pages/Calendar";
import { AnimatePresence } from "framer-motion";
import BrowseCourses from "./pages/BrowseCourses ";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const location = useLocation();
  return (
    <>
      <ReactLenis root>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/browse-courses" element={<BrowseCourses />} />
            </Routes>
          </AnimatePresence>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
