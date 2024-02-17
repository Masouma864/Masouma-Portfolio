import React from "react";

const InterestsSection = ({ interests }) => {
  return (
    <div className="interests container">
      <div className="section-title">
        <h2>Interests</h2>
      </div>

      <div className="row">
        {interests.map((interest, index) => (
          <div className="col-lg-3 col-md-4 mt-4" key={index}>
            <div className="icon-box">
              <i className={interest.iconClassName} style={{ color: interest.iconColor }}></i>
              <h3>{interest.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;