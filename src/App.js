import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {CategoriesProvider, AuthProvider} from './context';

function App() {
  return (
      <AuthProvider>
          <CategoriesProvider>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home />}></Route>
                      <Route path="/my-profile" element={<MyProfile />}></Route>
                      <Route path="/login" element={<Login />}></Route>
                      <Route path="/register" element={<Register />}></Route>
                  </Routes>
              </BrowserRouter>
          </CategoriesProvider>
      </AuthProvider>
  );
}

export default App;
