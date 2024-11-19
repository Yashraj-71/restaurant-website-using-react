import React from "react";
import "./AboutUs.css";
import mukesh1 from "./Images/mukesh1.jpg";
import harsh from "./Images/harsh.jpg";
import avi from "./Images/avi.jpg";
// Assuming you will move the CSS to a separate file

const AboutUs = () => {
  return (
    <div>
      {/* About Section */}
      <section className="about-section">
        <h1>ABOUT US</h1>
        <h3 align="left">WHO WE ARE.</h3>
        <p align="left">
          There's nothing cookie-cutter spicy grand. Not our delicious food. And
          definitely not the way we live life. Around here, we don't settle for
          anything less than food we're proud to serve. And we don't just clock
          in. Not when we can also become our best, make friends, and have fun
          while we're at it.{" "}
          <b>We're the delicious food company that lives life unboxed.</b>
        </p>
        <br />

        <h3 align="left">WHAT WE'RE ABOUT.</h3>
        <p align="left">
          At Spicy Grand, we don't just make food, we make people happy. Spicy
          Grand was built on the belief that chicken tikka should be special,
          and we carry that belief into everything we do. With more than 55
          years of experience under our belts, we understand how to best serve
          our customers through tried and true service principles:{" "}
          <b>
            we create food we're proud to serve and deliver it fast, with a
            smile.
          </b>
        </p>
      </section>

      {/* Team Section */}
      <h2 style={{ textAlign: "center" }}>Our Team Members</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={mukesh1} alt="Mukesh Saini" className="card-img" />
            <div className="container">
              <h2>Mukesh Kumar Saini</h2>
              <p>
                <button className="button">Contact - 9983925672</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={avi} alt="Avinash Saini" className="card-img" />
            <div className="container">
              <h2>Avinash Saini</h2>
              <p>
                <button className="button">Contact - 8058291393</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={harsh} alt="Harsh Chandel" className="card-img" />
            <div className="container">
              <h2>Harsh Chandel</h2>
              <p>
                <button className="button">Contact - 8696922611</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
