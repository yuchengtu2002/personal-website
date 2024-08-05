import React from "react";
import "./style.css";

export default function GameOverlay({ onClose }) {
  const games = [
    {
      title: "[NS] Super Mario Odyssey",
      subtitle: "999 Moons / 100% Completion",
      images: ["games/MarioOdessy999.jpg"],
    },
    {
      title: "[NS] Kirby and the Forgotten Land",
      subtitle: "100% Completion",
      images: ["games/Kirby.jpg"],
    },
    {
      title: "[NS] Super Smash Bros Ultimate",
      subtitle: "VIP Smash & All Challenges Completed",
      images: ["games/SmashVIP.jpg"],
    },
    {
      title: "[NS] Super Mario Bros. Wonder",
      subtitle: "100% Completion / All Collections",
      images: ["games/Wonder.jpg"],
    },
    // Add more games and images as needed
  ];

  return (
    <div className="game-overlay">
      <div className="game-overlay-content">
        <button className="game-overlay-close" onClick={onClose}>
          ×
        </button>
        <h2 className="game-overlay-title">Video Games & Achievements</h2>
        <div className="game-list">
          {games.map((game, index) => (
            <div key={index} className="game-item">
              <h3 className="game-title">{game.title}</h3>
              <h4 className="game-subtitle">{game.subtitle}</h4>
              <div className="game-images">
                {game.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${game.title} screenshot ${imgIndex + 1}`}
                    className="game-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
