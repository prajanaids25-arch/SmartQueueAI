import { Routes, Route } from "react-router-dom";

import FirebaseLogin from "./pages/FirebaseLogin";
import Login from "./pages/Login";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirebaseLogin />} />
      <Route path="/login" element={<Login />} />
      <Route
  path="/patient"
  element={
    <ProtectedRoute>
      <PatientDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/doctor"
  element={
    <ProtectedRoute>
      <DoctorDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;