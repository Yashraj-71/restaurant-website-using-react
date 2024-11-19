import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./login";
import Home from "./Home";
import Services from "./Services";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";
import "./App.css";

// Importing images
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img11 from "./Images/img11.jpg";
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import AppStore from "./Images/AppStore.png";
import img15 from "./Images/img15.jpg";

// Header Component
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src={img15}
          alt="Sweets"
          width="100px"
          height="100px"
          className="rounded-circle"
        />
        <Link className="navbar-brand" to="/">
          RV Sweets and Restaurant
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/services">
              Services
            </Link>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
            <Link className="nav-link" to="/aboutus">
              About Us
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="container-fluid py-5 light-footer">
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">RV Sweets and Restaurant</h5>
            <p>Feel free to contact us for more information</p>
            <p className="pt-2 mb-0">
              <a className="text-dark" href="mailto:rvsweets11@gmail.com">
                rvsweets11@gmail.com
              </a>
            </p>
            <p className="mt-3">
              <a className="text-dark" href="tel:+6375737807">
                6375737807
              </a>
            </p>
            <p className="mb-0">Near Bus Stand, Khatushyam Ji, Sikar (Raj.)</p>
          </div>
          <div className="col-lg-6 col-md-12 text-center">
            <span>© 2024 RV Sweets and Restaurant. All rights reserved.</span>
            <ul>
              <p className="title">SOCIAL LINKS</p>
              <div className="socialIcons">
                <a href="https://www.facebook.com/">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
              <img src={AppStore} alt="App Store" height="30px" width="120px" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
