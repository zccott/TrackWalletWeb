import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Transactions" element={<Transactions />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
  );
}

export default App;
