import React, { useRef } from "react";
import "./Join.css";

import emailjs from "@emailjs/browser";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qjr2ekn",
        "template_icxk279",
        form.current,
        "Fwfjpfv8InSW1385E"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To</span>
          <span>Level Up</span>
        </div>
        <div>
          <span>Your body </span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter Your mail "
            name="user_email"
          />
          <button className="btn btn-j">Join Us</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
