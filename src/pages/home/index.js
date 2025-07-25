import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

const carouselProjects = [
  {
    title: "Packet Sniffing and Anomaly Detection Using Machine Learning",
    description: "Real-time network anomaly detection system with synthetic packet generation, live packet sniffing, and Random Forest classification via a Flask dashboard.",
    link: "https://github.com/Gobi05-exe/Packet-Sniffing-and-Anomaly-Detection-using-ML",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Medical Image Caption Generator",
    description: "Generates medical image captions using a fine-tuned LLaMA 3 Vision model on the ROCO dataset, with Jupyter notebooks for training and inference.",
    link: "https://github.com/Gobi05-exe/Medical-Image-Caption-Generator",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Ethereum Powered To-Do List",
    description: "Decentralized To-Do app using Ethereum smart contracts, built with Solidity, Truffle, and a simple Web3.js frontend. Supports local blockchain via Ganache.",
    link: "https://github.com/Gobi05-exe/Ethereum-Powered-ToDo-List",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Real-Time Process Scheduling Simulator",
    description: "Simulates FCFS, RR, and SJF CPU scheduling with real-time task execution, Gantt chart visualization, and system-level process control using C and SQLite.",
    link: "https://github.com/Gobi05-exe/Process-Scheduling-Simulator",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
  },
];

export const Home = () => {
  const images = [
    require("../../assets/images/img1.png"),
    require("../../assets/images/img2.png"),
    require("../../assets/images/img3.png"),
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400); // fade out duration
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100 " style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={images[currentImage]}
              alt="slider"
              className={`homepage-slider-img${fade ? " fade-in" : " fade-out"}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px", transition: "opacity 0.4s" }}
            />
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <a
                    href="https://drive.google.com/file/d/1DhcuJOMRIYeqruwIhGhyh4B3OmQaz0-w/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text_2"
                    style={{ textDecoration: 'none' }}
                  >
                    <div id="button_resume" className="ac_btn btn">
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="t_border my-2 ml-0 mb-4 text-left" />
      </section>
    </HelmetProvider>
  );
};
