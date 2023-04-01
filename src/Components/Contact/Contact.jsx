import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <section>
        <SectionHeader title="CONTACT ME" color="#2c3e50" className="main" />
        <div className="container">
          <div id="contactForm">
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${style.inputs}`}
                id="floatingInput"
                placeholder="Name"
              />
              <label className={`${style.labels}`} htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${style.inputs}`}
                id="floatingInput"
                placeholder="Email Address"
              />
              <label className={`${style.labels}`} htmlFor="floatingInput">Email Address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className={`form-control ${style.inputs}`}
                id="floatingInput"
                placeholder="Phone Number"
              />
              <label className={`${style.labels}`} htmlFor="floatingInput">Phone Number</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className={`form-control ${style.inputs}`}
                placeholder="Message"
                id="floatingTextarea2"
                style={{ height: 100 }}
              ></textarea>
              <label className={`${style.labels}`} htmlFor="floatingTextarea2">Message</label>
            </div>
            <div id="success"></div>
            <div className="form-group">
              <button className={style.btn}>Send</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
