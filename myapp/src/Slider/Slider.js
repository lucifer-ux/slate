import React, { useState } from "react";
import "./Slider.css";

const carouselData = [
  {
    id: 0,
    title: "Tiger Devil",
    description:
      "Tiger Devil is a legendary creature that arouses both fascination and fear. Known for its imposing appearance and unpredictable behavior, this beast is often described as a tiger with demonic features.",
    imgSrc: "https://i.postimg.cc/9fsq9Ct4/img1.png",
    thumbSrc: "https://i.postimg.cc/C1yz1JSk/thumb1.png",
    bgColor: "#a9350a",
  },
  {
    id: 1,
    title: "Dragon Devil",
    description:
      "Dragon Devil combines the majesty of a dragon with the ferocity of a demon. Known for his supernatural powers, he is depicted in myths as a guardian of treasures or a being of destruction.",
    imgSrc: "https://i.postimg.cc/FsGdZjVX/img2.png",
    thumbSrc: "https://i.postimg.cc/LXzhZf87/thumb2.png",
    bgColor: "#201f1e",
  },
  {
    id: 2,
    title: "Fox Devil",
    description:
      "Crimson Fox Devil is a legendary creature combining the cunning of a fox with the ferocity of a demon. Known for its bright red fur, it's often depicted as a keeper of ancient secrets.",
    imgSrc: "https://i.postimg.cc/0yB6gP4t/img3.png",
    thumbSrc: "https://i.postimg.cc/MHqH0TcG/thumb3.png",
    bgColor: "#7e0806",
  },
  {
    id: 3,
    title: "Lion Devil",
    description:
      "Lion Devil is a legendary creature combining the grandeur of a lion with the ferocity of a demon. Known for its strength, it is depicted as a fierce guardian.",
    imgSrc: "https://i.postimg.cc/vmx4bCFG/img4.png",
    thumbSrc: "https://i.postimg.cc/13ftrbzD/thumb4.png",
    bgColor: "#5d2917",
  },
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      {carouselData.map((item, index) => (
        <div
          key={item.id}
          className={`item ${index === activeIndex ? "active" : ""}`}
        >
          {/* Image Section */}
          <div
            className="img-box"
            style={{ backgroundColor: item.bgColor }}
          >
            <img src={item.imgSrc} alt={item.title} />
          </div>

          {/* Information Section */}
          <div className="info-box">
            <div
              className="info-slider"
              style={{ transform: `translateY(${-activeIndex * 100}%)` }}
            >
              <div className="info-item" style={{ "--i": index }}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href="#" className="btn">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Thumbnails */}
      <ul className="thumb">
        {carouselData.map((item, index) => (
          <li
            key={item.id}
            className={index === activeIndex ? "selected" : ""}
            onClick={() => handleThumbClick(index)}
          >
            <img src={item.thumbSrc} alt={`Thumb ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
