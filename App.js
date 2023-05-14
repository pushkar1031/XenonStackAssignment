import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import Registation from "./components/Registation";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContactUs } from "./components/ContactUs";
import { AboutUs } from "./components/AboutUs";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route
            path="/registation"
            element={<Registation></Registation>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
