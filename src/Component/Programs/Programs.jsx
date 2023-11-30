import React from "react";
import "./Programs.css";
import { programsData } from "../../Data/programData";
import RightArrow from "../../assets/rightArrow.png";
function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="progrmas-header">
        <span className="stroke-text">Explore our</span>
        <span>programs</span>
        <span className="stroke-text">To shape you</span>
      </div>

      <div className="program-category">
        {programsData.map((programs) => (
          <div className="category">
            {programs.image}
            <spna>{programs.heading}</spna>
            <spna>{programs.details}</spna>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
