import React from "react";
import SideBar from "./components/SideBar";
// import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import Tasks from "./pages/Tasks";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <div className="w-1/6 h-screen">
          <SideBar />
        </div>
        <div className="w-5/6 h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
