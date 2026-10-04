import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Records from "./pages/Records.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import './App.css';

function App() {
  const location = useLocation();
  return (
    <>
    {(() => {
      const hideNavbarRoutes =["/Login","/Register"];
      const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
      return !shouldHideNavbar && <Navbar />;
    })()}

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Dashboard' element={<Dashboard />}></Route>
      <Route path='/Records' element={<Records />}></Route>
      <Route path='/Register' element={<Register />}></Route>
      <Route path='/Login' element={<Login />}></Route>
    </Routes>
    </>
  );
}

export default App
