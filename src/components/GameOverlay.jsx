import React, { useRef, useEffect } from "react";
import "./style.css";

export default function GameOverlay({ onClose }) {
  const overlayRef = useRef(null); // Create a ref for the overlay

  const games = [
    {
      title: "[NS] Super Mario Odyssey",
      type: "Sandbox3D Platformer",
      subtitle: "999 Moons / 100% Completion",
      images: ["games/MarioOdessy999.jpg"],
    },
    {
      title: "[NS] The Legend of Zelda: Breath of the Wild & Tears of the Kingdom",
      type: "Open-world action-adventure",
      subtitle: "400 Hours Combined",
      images: ["games/zelda.png"],
    },
    {
      title: "[NS] Kirby and the Forgotten Land",
      type: "Sandbox3D Platformer",
      subtitle: "100% Completion",
      images: ["games/Kirby.jpg"],
    },
    {
      title: "[NS] Super Smash Bros Ultimate",
      type: "Platform Fighter",
      subtitle: "VIP Smash & All Challenges Completed",
      images: ["games/SmashVIP.jpg"],
    },
    {
      title: "[NS] Super Mario Bros. Wonder",
      type: "2D Platformer",
      subtitle: "100% Completion / All Collections",
      images: ["games/Wonder.jpg"],
    },
    {
      title: "[PC] Celeste",
      type: "2D Platformer",
      subtitle: "ALL A-Sides, B-Sides Completed",
      images: ["games/Celeste.png"],
    },
    {
      title: "[PC] Hollow Knight",
      type: "2D Metroidvania action-adventure",
      subtitle: "106% Completion",
      images: ["games/hollowKnight.png"],
    },
    {
      title: "[PC] Tunic",
      type: "action-adventure game, puzzle-solving",
      subtitle: "All Collections Found, 100% Completion",
      images: ["games/tunic2.png"],
    },
    {
      title: "[PC] Elden Ring",
      type: "Action role-playing, Souls",
      subtitle: "All Achievements Completed",
      images: ["games/eldenRing.jpg"],
    },
    {
      title: "[PC] Baldurs Gate 3",
      type: "Role-playing",
      subtitle: "Second Playthough Completed",
      images: ["games/bg3.jpg"],
  },


    
    // Add more games and images as needed
  ];

  useEffect(() => {
    // Add an event listener for clicks
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        onClose(); // Close the overlay if click is outside the content
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="game-overlay">
      <div className="game-overlay-content" ref={overlayRef}>
        <button className="game-overlay-close" onClick={onClose}>
          ×
        </button>
        <h2 className="game-overlay-title">🏆 Video Games Achievements 🏆</h2>
        <div className="game-list">
          {games.map((game, index) => (
            <div key={index} className="game-item">
              <h3 className="game-title">{game.title}</h3>
              <h4 className="game-type">{game.type}</h4>
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
        <h2 className="game-overlay-ending"> And some other great games :D</h2>
        <h2 className="game-overlay-ending">Hmmm... That's a lot of games played in the past few years 🤔</h2>
      </div>
    </div>
  );
}
