import React, { useState } from "react";
import "./Testinomial.css";
import { testimonialsData } from "../../Data/TestinomialData";
import right from "../../assets/rightArrow.png";
import left from "../../assets/leftArrow.png";
import { motion } from "framer-motion";
function Testinomial() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tlengrh = testimonialsData.length;
  return (
    <div className="testinomail" id="testimonial">
      <div className="left-t">
        <spna>Testimonials</spna>
        <spna className="stroke-text">What they</spna>
        <spna>Say about us</spna>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          {" "}
          <spna style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </spna>
          {"  "}
          <span>- {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrow">
          <img
            src={left}
            alt=""
            onClick={() =>
              selected === 0
                ? setSelected(tlengrh - 1)
                : setSelected((prev) => prev - 1)
            }
          />
          <img
            src={right}
            alt=""
            onClick={() =>
              selected === tlengrh - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testinomial;
