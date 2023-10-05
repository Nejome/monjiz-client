import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route element={<ProtectedRoute />}>
                  <Route path="/profile" element={<Profile />}></Route>
              </Route>
              <Route element={<GuestRoute />}>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
