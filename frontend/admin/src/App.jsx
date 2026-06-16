import React from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./Pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Markup from "./Pages/Markup";

/**
 * Composant racine de l'application admin.
 * - Fournit le contexte de thème (clair/sombre)
 * - Configure les routes et le système de toast
 */
function App() {
  return (
    <ThemeProvider>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
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
    </ThemeProvider>
  );
}

export default App;