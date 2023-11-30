import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import heart from "../../assets/heart.png";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best add div */}
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best Fitness Club in the town</span>
        </div>
        {/* Shape heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span style={{ marginLeft: "2rem" }}>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here We Will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={1140} start={100} delay="4" preFix="+" />
            </span>
            <span>Member joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={70} start={10} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h ">
        <button className="btn">Join Now</button>

        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={heart} />
          <span>Hreat Beat</span>
          <span>90bpm</span>
        </motion.div>
        {/* hero image  */}
        <img src={heroImage} className="heroImage" />
        <motion.img
          src={heroImageBack}
          className="heroImageBack"
          initial={{ right: "11rem" }}
          whileInView={{ right: "22rem" }}
          transition={transition}
        />

        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burn</span>
            <span>90KCAL</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
