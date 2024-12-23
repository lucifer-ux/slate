import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({searchImage}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://via.placeholder.com/800x400", // Replace with the actual image URL
      title: "Stray",
      tags: ["Cats", "Adventure", "Cyberpunk", "Atmospheric"],
      friends: [
        { avatar: "https://via.placeholder.com/40", name: "Friend 1" },
        { avatar: "https://via.placeholder.com/40", name: "Friend 2" },
        { avatar: "https://via.placeholder.com/40", name: "Friend 3" },
      ],
      friendsCount: 12,
    },
    {
        image: "https://via.placeholder.com/800x400", // Replace with the actual image URL
        title: "Stray",
        tags: ["Cats", "Adventure", "Cyberpunk", "Atmospheric"],
        friends: [
          { avatar: "https://via.placeholder.com/40", name: "Friend 1" },
          { avatar: "https://via.placeholder.com/40", name: "Friend 2" },
          { avatar: "https://via.placeholder.com/40", name: "Friend 3" },
        ],
        friendsCount: 12,
      },{
        image: "https://via.placeholder.com/800x400", // Replace with the actual image URL
        title: "Stray",
        tags: ["Cats", "Adventure", "Cyberpunk", "Atmospheric"],
        friends: [
          { avatar: "https://via.placeholder.com/40", name: "Friend 1" },
          { avatar: "https://via.placeholder.com/40", name: "Friend 2" },
          { avatar: "https://via.placeholder.com/40", name: "Friend 3" },
        ],
        friendsCount: 12,
      },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slide"
        style={{
          backgroundImage: `url(${searchImage})`,
        }}
      >
        <div className="carousel-overlay">
          {/* Tags */}
          <div className="tags">
            {slides[currentIndex].tags.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
            <button className="add-tag">+</button>
          </div>

          {/* Title */}
          <h1 className="carousel-title">{slides[currentIndex].title}</h1>

          {/* Friends */}
          <div className="friends">
            <div className="friend-avatars">
              {slides[currentIndex].friends.map((friend, index) => (
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="friend-avatar"
                  key={index}
                />
              ))}
            </div>
            <span className="friends-count">
              {slides[currentIndex].friendsCount} friends
            </span>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* Navigation */}
      <button className="prev-slide" onClick={prevSlide}>
        ◀
      </button>
      <button className="next-slide" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
};

export default Carousel;
