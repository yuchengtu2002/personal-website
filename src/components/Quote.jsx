import React from "react";
import "./style.css";

export default function Quote() {
  return (
    <div className="quote-container">
      <h2 className="quote-heading">
        🤔 A good quote I like
      </h2>
      <div className="quote-content">
        <div className="quote-box">
          <p className="quote-text">
            {/* Replace the text content here */}
            “Yesterday is history. Tomorrow is a mystery. But today is a GIFT. That is why we call it present.”
          </p>
          <p className="quote-author">- Bil Keane</p>
          <p className="quote-text2"> Or as I heard it from “KungFu Panda”. Let's chrish every today as we would cherish a gift, and make it count.</p>

        </div>
      </div>
      <p className="download-resume">
        If you would like to know more about me, feel free to download my resume from the top right corner! </p>
    </div>
  );
}
