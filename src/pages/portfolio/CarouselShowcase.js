import React, { useRef } from "react";
import "./style.css";

const carouselProjects = [
  {
    title: "Packet Sniffing and Anomaly Detection Using Machine Learning",
    description: "Real-time network anomaly detection system with synthetic packet generation, live packet sniffing, and Random Forest classification via a Flask dashboard.",
    link: "https://github.com/Gobi05-exe/Packet-Sniffing-and-Anomaly-Detection-using-ML",
    img: require("../../assets/images/packet_sniffing.jpg"),
  },
  {
    title: "Medical Image Caption Generator",
    description: "Generates medical image captions using a fine-tuned LLaMA 3 Vision model on the ROCO dataset, with Jupyter notebooks for training and inference.",
    link: "https://github.com/Gobi05-exe/Medical-Image-Caption-Generator",
    img: require("../../assets/images/caption.jpeg"),
  },
  {
    title: "Ethereum Powered To-Do List",
    description: "Decentralized To-Do app using Ethereum smart contracts, built with Solidity, Truffle, and a simple Web3.js frontend. Supports local blockchain via Ganache.",
    link: "https://github.com/Gobi05-exe/Ethereum-Powered-ToDo-List",
    img: require("../../assets/images/ethereum.jpg"),
  },
  {
    title: "Real-Time Process Scheduling Simulator",
    description: "Simulates FCFS, RR, and SJF CPU scheduling with real-time task execution, Gantt chart visualization, and system-level process control using C and SQLite.",
    link: "https://github.com/Gobi05-exe/Process-Scheduling-Simulator",
    img: require("../../assets/images/cpu.jpg"),
  },
];

export default function CarouselShowcase() {
  const carouselRef = useRef(null);

  // Duplicate the projects for infinite loop effect
  const projects = [...carouselProjects, ...carouselProjects];

  // Optional: Add drag/scroll support for desktop/mobile

  return (
    <div className="carousel-showcase-page">
      <h2 className="carousel-title">Other Works</h2>
      <div className="carousel-horizontal-wrapper">
        <div className="carousel-horizontal" ref={carouselRef}>
          {projects.map((proj, idx) => (
            <div className="carousel-horizontal-card" key={idx} style={{ backgroundImage: `url(${proj.img})` }}>
              <div className="carousel-horizontal-overlay">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 