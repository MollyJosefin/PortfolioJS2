import React, { useState, useEffect } from "react";
import "../styles/_carousel.scss"; // Skapa denna SCSS-fil för styling

const images = [
    "/tavla11.jpg",
"/musmatta1.jpg", 
  "/tavla1.jpg",
  "/skal3.jpg",
  "/tavla2.jpg",
  "/tavla3.jpg",
  "/skal2.jpg",
  "/musmatta2.jpg",
  "/tavla6.jpg",
  "/skal1.jpg",
  "/tavla4.jpg",
  "/skal4.jpg",
  "/tavla5.jpg",
  "/tavla8.jpg",
  "/tavla10.jpg",
"/tavla7.jpg"
];

const Carousel = () => {
    return (
      <div className="carousel">
        <div className="carousel-track">
          {/* Dubbel render för att skapa en oändlig loop */}
          {[...images, ...images].map((img, index) => (
            <img key={index} src={img} alt={`carousel-${index}`} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;
