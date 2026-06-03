import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Markup from "./Pages/Markup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Markup />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;