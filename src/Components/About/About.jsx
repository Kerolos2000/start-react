import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from "./About.module.css";

export default function About() {
  return (
    <section className={style.About}>
      <div className="container d-flex flex-column align-items-center pb-3">
        <SectionHeader title="ABOUT ME" color="white" />
        <div className="row g-3">
          <div className={`col-md-6 ${style.div} ${style.left}`}>
            <p className={`h5 ${style.p}`}>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className={`col-md-6 ${style.div}`}>
            <p className={`h5 ${style.p}`}>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
