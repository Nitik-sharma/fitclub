import React from "react";
import "./Plans.css";
import { plansData } from "../../Data/PlanData";
import whiteTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans-container" id="plans">
      {/* PLans header */}
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="progrmas-header">
        <span className="stroke-text">Ready to start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now With us</span>
      </div>
      {/* plan card  */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <spna>${plan.price}</spna>
            <div className="features">
              {plan.features.map((feature) => (
                <div className="feature">
                  <img src={whiteTick} />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits&rarr;</span>
            </div>
            <button className="btn">Join Us</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
