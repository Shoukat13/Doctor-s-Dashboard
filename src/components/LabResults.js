import React from "react";
import "./LabResults.css";

function LabResults({ labResults }) {
  return (
    <div className="lab-results">
      <h3 className="lab-results__title">Lab Results</h3>
      <ul className="lab-results__list">
        {labResults.map((result, index) => (
          <li key={index} >
          <div className="lab-results__item">{result} <img className="download-icon" src = "/icons/download.jpg" alt = "download"/></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabResults;
