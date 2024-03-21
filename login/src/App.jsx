import "./App.css";
import Register from "./components/register.jsx";
import Login from "./components/login.jsx";
import Dashboard from "./components/UserDashboard.jsx";
import Transactions from "./components/transactions.jsx";
import Profile from "./components/Profile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard name={"Home"} />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
