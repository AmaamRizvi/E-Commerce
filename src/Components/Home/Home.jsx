import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import { FaCircleChevronRight } from "react-icons/fa6";
import data from "../../DataBase/Data";
import { Link } from "react-router-dom";

export default function Home() {
  const imageLinks = [
    "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
  ];

  const [viewAll, setViewAll] = useState(false);

  const dataDisplay = viewAll ? data : data.slice(0, 10);

  return (
    <>
      <Navbar />

      <Carousel indicators={false} className="carousel">
        {imageLinks.map((imageLink, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 custom-img mt-4"
              src={imageLink}
              alt={`Slide ${index + 1}`}
              style={{ height: "450px", width: "500px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div
        className="view-all-container"
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        {!viewAll && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setViewAll(true)}
          >
            View All
          </button>
        )}
      </div>

      <h2>
        Recommended <FaCircleChevronRight className="left-arrow" />
      </h2>
      <div className="items-container">
        {dataDisplay.map((item, index) => (
          <div key={index} id={item.id} className="items-home">
            <img src={item.img} alt={item.title} className="products" />
            <p className="title">{item.title}</p>
            <Link to={"/Product"}>
              <button type="button" className="btn btn-dark button59">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
