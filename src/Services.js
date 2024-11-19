import React from "react";
import "./Services.css";

// Importing images
import sweetsImage from "./Images/sweets.jpg";
import img2 from "./Images/img2.jpg";
import fastfood from "./Images/fastfood.jpg";
import roomsImage from "./Images/roomImage.jpg";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>

        {/* Sweet Service Card */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <img
              src={sweetsImage}
              width="600px"
              height="350px"
              className="card-img-top"
              alt="Sweets"
            />
            <div className="card-body">
              <h3 className="card-title">Sweets</h3>
              <p className="card-text">
                Indulge in our delectable range of sweets made with authentic
                recipes and premium ingredients. Perfect for satisfying your
                sweet cravings.
              </p>
            </div>
          </div>
        </div>

        {/* Restaurant Service Card */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={img2}
                width="600px"
                height="350px"
                className="card-img-top"
                alt="Restaurant"
              />
              <div className="card-body">
                <h3 className="card-title">Restaurant</h3>
                <p className="card-text">
                  Experience exquisite dining at our restaurant. Enjoy a wide
                  range of culinary delights prepared with the finest
                  ingredients.
                </p>
              </div>
            </div>
          </div>

          {/* Fast Food Service Card */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={fastfood}
                width="600px"
                height="350px"
                className="card-img-top"
                alt="Fast Food"
              />
              <div className="card-body">
                <h3 className="card-title">Fast Food</h3>
                <p className="card-text">
                  Enjoy quick and delicious fast food options at our restaurant.
                  From burgers to fries, we've got your fast food cravings
                  covered.
                </p>
              </div>
            </div>
          </div>

          {/* Rooms Service Card */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={roomsImage}
                className="card-img-top"
                width="600px"
                height="350px"
                alt="Rooms"
              />
              <div className="card-body">
                <h3 className="card-title">Rooms</h3>
                <p className="card-text">
                  Relax and unwind in our comfortable rooms. Experience luxury
                  and convenience during your stay with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
