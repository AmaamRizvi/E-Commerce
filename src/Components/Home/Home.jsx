import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import { FaCircleChevronRight } from "react-icons/fa6";
import data from "../../DataBase/Data";
import { Link } from "react-router-dom";

export default function Home() {
  const imageLinks = [
   "https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/An_Adidas_shoe.jpg/2560px-An_Adidas_shoe.jpg",
    "https://www.eatingwell.com/thmb/n6aazD3Om26LEoHOMEYnRTYCgcQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/I-Walked-10000-Steps-a-Day-on-Vacation-These-Are-the-Sneakers-That-Saved-My-Feet-fa2e81dd28ff4d8a9ae3401ab5685cab.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg",
    "https://t4.ftcdn.net/jpg/05/06/36/71/360_F_506367145_aTN8tLqtKXDYxzHQs5DH4HGsbVT9OgMn.jpg",
  ];

  const [viewAll, setViewAll] = useState(false);

  const [carouselView, setCarouselView] = useState(false);

  const dataDisplay = viewAll && !carouselView ? data : data.slice(0, 10);

  return (
    <>
      <Navbar />

      <Carousel indicators={false} className="carousel">
        {imageLinks.map((imageLink, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 custom-img mt-4 "
              src={imageLink}
              alt={`Slide ${index + 1}`}
              style={{ height: "auto", maxWidth: "100%" }}
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
        {viewAll && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCarouselView(!carouselView)}
          >
            {carouselView ? "Grid View" : "Carousel View"}
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
