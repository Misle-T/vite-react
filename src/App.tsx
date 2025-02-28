import React from "react";
import "./styles/style.css";
import { LoginForm } from "./components/auth/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/ui/SideBar";
import Header from "./components/ui/Header";
import RFQList from "./components/rfq/RFQList";
import { BuyerRFQForm } from "./components/rfq/BuyerRFQForm";
import PostRFQ from "./components/rfq/PostRFQForm";
import { UserProvider } from "./context/UserContext";
import Footer from "./components/ui/Footer";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Card } from "./components/dashboard/Card";
function App() {
  return (
    <Router>
      {/* Routing logic */}
      <UserProvider>
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route path="/" element={<Dashboard />} />
          <Route path="/rfqs" element={<BuyerRFQForm />} />
          <Route path="/rfqs/post-rfq" element={<PostRFQ />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
