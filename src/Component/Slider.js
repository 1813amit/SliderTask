import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import img1 from "../img/M3M Altitude.webp";
import img2 from "../img/M3M Mansion.webp";
import img3 from "../img/Whiteland Urban Resort.webp";
import img4 from "../img/Smartworld One DXP.webp";
import "./Slider.css"; // Import your custom styles

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 7px 15px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
  }
`;

const slider = [
  {
    image: img1,
    title: "M3M Alltitude",
    location: "Sector 103, Gurgaon",
    price: "On Request",
  },
  {
    image: img2,
    title: "M3M Alltitude",
    location: "Sector 65, Gurgaon",
    price: "On Request",
  },
  {
    image: img3,
    title: "M3M Alltitude",
    location: "Sector 113, Gurgaon",
    price: "On Request",
  },
  {
    image: img4,
    title: "M3M Alltitude",
    location: "Sector 113, Gurgaon",
    price: "On Request",
  },
];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation
        effect="coverflow"
        centeredSlides
        slidesPerView={1}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 120,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          300: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 140,
          },
        }}
        loop={true}
        className="mySwiper"
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h6>{item.title}</h6>
                <p>
                  <FaMapMarkerAlt /> {item.location}
                </p>
                <p>
                  <FaRupeeSign /> {item.price}
                </p>
                {/* <button className="btn mt-2 " style={{backgroundColor:"black", color:"white",}}>View More</button> */}
                <StyledButton>View More</StyledButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
