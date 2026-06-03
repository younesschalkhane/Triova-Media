import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Markup from "./Pages/Markup";


function App() {
  return (
<<<<<<< HEAD
    <>

    <Markup />
    </>
  )
=======
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
>>>>>>> 41eef6c711df4d6e90db6ae1c408f07f389a9b56
}

export default App;