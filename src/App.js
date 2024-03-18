import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './footer';
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Contact from "./contact";
import About from "./About";
import Products from "./Pages/Products";

function App() {
  return (
    <>
     <BrowserRouter>
    <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
        </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    

  );
}

export default App;
