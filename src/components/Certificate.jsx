import React from "react";
import "./style.css";

export default function Certificate() {
  return (
    <div>
                <h2 className="certificate-heading">Certificate</h2>

      <div className="certificate-container" id="certificate">
        <div className="certificateContent-container">
          <div className="certificate-img">
            <img src="certificate.png" alt="certificate" />
          </div>

          <div className="certificate-content">
            <h2 className="certificate-title">IBM AI Engineering Professional Certificate</h2>
            <p className="certificate-time">2024.7</p>
            <a
                className="download-certificate"
                href="IBM_AI_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Certificate
              </a>
            <div className="certificate-description">
              <ul>
                <li>Completed the IBM AI Engineering Professional Certificate, gaining a solid foundation in machine learning (ML) and deep learning (DL) principles.</li>
                <li>
                Developed proficiency in implementing ML algorithms and building neural networks with PyTorch and TensorFlow. Acquired the ability to effectively communicate the outcomes of deep learning projects and apply advanced AI techniques in practical scenarios.
                </li>
                <li>Built and deployed a deep learning model to recognize stop signs on street.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/*
"Completed the IBM AI Engineering Professional Certificate, gaining a solid foundation in machine learning (ML) and deep learning (DL) principles. 
Developed proficiency in implementing ML algorithms, performing ML on big data using Apache Spark, and building neural networks with Keras, PyTorch, and TensorFlow. Acquired the ability to effectively communicate the outcomes of deep learning projects and apply advanced AI techniques in practical scenarios."
*/