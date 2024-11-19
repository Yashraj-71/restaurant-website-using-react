import React from "react";
import img1 from "./Images/img.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img11 from "./Images/img11.jpg";

// MainContent Component
const MainContent = () => {
  return (
    <main>
      <div className="container">
        <div className="row slider-container">{/* Slider content here */}</div>
        <div id="main-content" className="row mt-5">
          <div className="col-md-6">
            <h2 style={{ textShadow: "2px 2px 5px grey" }}>
              Welcome To RV Sweets and Restaurant
            </h2>
            <p>
              RV Sweets and Restaurant is involved in offering a varied range of
              tempting sweets and other delicacies...
            </p>
          </div>
          <div className="col-md-6 slider1">
            <img src={img1} alt="slide1" className="slider" />
            <img src={img2} alt="slide2" className="slider" />
            <img src={img11} alt="slide3" className="slider" />
          </div>
        </div>
        <div id="virtual-tour" className="row mt-5">
          <div className="col-md-6">
            <Link to="#virtual-tour">
              <h2>Virtual Tour</h2>
              <img src={img1} width="400px" height="250px" alt="Virtual Tour" />
            </Link>
            <p>
              Explore our premises online and get a feel for our restaurant and
              hotel facilities.
            </p>
          </div>
          <div className="col-md-6">
            <Link to="#event-hosting">
              <h2>Event Hosting</h2>
              <img
                src={img2}
                width="400px"
                height="250px"
                alt="Event Hosting"
              />
            </Link>
            <p>
              Host your events with us and enjoy our catering services and event
              packages.
            </p>
          </div>
        </div>
        <div id="event-hosting" className="row mt-5">
          <div className="col-md-6">
            <Link to="#chef-profiles">
              <h2>Local Attractions</h2>
              <img
                src={img3}
                width="400px"
                height="250px"
                alt="Local Attractions"
              />
            </Link>
            <p>
              Discover nearby attractions, landmarks, and activities to enhance
              your visit.
            </p>
          </div>
          <div className="col-md-6">
            <Link to="#rooms">
              <h2>Accommodations</h2>
              <img
                src={img11}
                width="400px"
                height="250px"
                alt="Accommodations"
              />
            </Link>
            <p>Explore our comfortable and luxurious rooms for your stay.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
