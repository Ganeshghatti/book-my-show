import React from "react";
import "./App.scss";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import logo from "./Images/logo.png";
import ReactSearchBox from "react-search-box";
import {
  BiSearch,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import { FaBars, FaStar } from "react-icons/fa";
import {
  MdHome,
  MdTrendingUp,
  MdBookmark,
  MdTv,
  MdSettings,
  MdAccountCircle,
} from "react-icons/md";
import one from "./Images/Carousel/1.png";
import two from "./Images/Carousel/2.png";
import three from "./Images/Carousel/3.png";
import ava from "./Images/Recommended/ava.png";
import s26 from "./Images/Recommended/s26.png";
import ow from "./Images/Recommended/ow.png";
import jl from "./Images/Recommended/jl.png";
import mh from "./Images/Recommended/mh.png";

export default function App() {
  const data = [
    {
      name: "Monster House",
      img: mh,
      rating: 6.7,
      votes: "101k",
      generes: ["comedy", "action"],
    },
    {
      name: "Justice League",
      img: jl,
      rating: 4.9,
      votes: "61k",
      generes: ["adventure", "action"],
    },
    {
      name: "Avatar",
      img: ava,
      rating: 9.9,
      votes: "161k",
      generes: ["romance", "drama"],
    },
    {
      name: "Onward",
      img: ow,
      rating: 7.4,
      votes: "77k",
      generes: ["action", "drama"],
    },
  ];
  return (
    <section className="hero">
      <div className="menu">
        <div className="centered-icons">
          <MdHome size={24} style={{ fill: "white" }} />
          <MdTrendingUp size={24} style={{ fill: "gray" }} />
          <MdBookmark size={24} style={{ fill: "gray" }} />
          <MdTv size={24} style={{ fill: "gray" }} />
        </div>
        <div className="bottom-icons">
          <MdSettings size={24} style={{ fill: "white" }} />
          <MdAccountCircle size={24} style={{ fill: "white" }} />
        </div>
      </div>
      <div className="container">
        <div className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="logo" className="logo" />
            <div className="searchboxdiv">
              <label htmlFor="searchbox">
                <BiSearch />
              </label>
              <input
                className="searchbox"
                id="searchbox"
                type="search"
                placeholder="Search for Movies,sports and activities"
              />
            </div>
          </div>
          <div className="navbar-right">
            <p className="location">
              Bengaluru <BiChevronDown />
            </p>
            <button className="navbar-signup">Sign-up</button>
            <FaBars size={24} className="navbar-hamburgur" />
          </div>
        </div>
        <div className="Carousel">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            isIntrinsicHeight
            isPlaying
            infinite
            className="carousel-container"
          >
            <Slider>
              <Slide index={0}>
                <div className="slide-content">
                  <img
                    src={one}
                    alt="one"
                    className="carousel-image carousel-one"
                  />
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide-content">
                  <img
                    src={two}
                    alt="two"
                    className="carousel-image carousel-two"
                  />
                </div>
              </Slide>
              <Slide index={2}>
                <div className="slide-content">
                  <img
                    src={three}
                    alt="three"
                    className="carousel-image carousel-three"
                  />
                </div>
              </Slide>
            </Slider>
            <div className="carousel-button-div">
              <ButtonBack className="carousel-button">
                <BiChevronLeft />
              </ButtonBack>
              <ButtonNext className="carousel-button">
                <BiChevronRight />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
        <div className="Recommended">
          <p className="Recommended-heading">Recommended Movies</p>
          <div className="Recommended-div">
            {data.map((item, index) => (
              <div key={index} className="Recommended-div-card">
                <div className="Recommended-div-img-div">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="Recommended-div-img"
                  />
                  <div className="Recommended-div-img-div-content">
                    <p className="Recommended-div-card-movie-rating">
                      <FaStar size={22} color="rgba(219, 51, 74, 1)" />
                      <p className="Recommended-div-card-movie-rating-text">
                        {item.rating}/10
                      </p>
                    </p>
                    <p className="Recommended-div-card-movie-votes">
                      {item.votes} votes
                    </p>
                  </div>
                </div>
                <p className="Recommended-div-card-movie-name">{item.name}</p>
                <p className="Recommended-div-card-movie-genres">
                  {item.generes.join("/")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
