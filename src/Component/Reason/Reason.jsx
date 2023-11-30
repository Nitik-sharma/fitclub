import React from "react";
import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import nb from "../../assets/nb.png";
function Reason() {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <spna>Some Resaons</spna>
        <div>
          <span className="stroke-text">Why </span>
          <spna>Choies US?</spna>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ Expert Coaches</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Train smarter and fatser than before</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>1 Feee program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable Partner</span>
          </div>
        </div>
        <spna style={{ color: "var(--gray)", fontSize: "2rem" }}>
          Our Partners
        </spna>
        <div className="partner-r">
          <img src={nb} alt="" />
          <img src={nike} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reason;
