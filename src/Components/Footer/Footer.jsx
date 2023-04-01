import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer id={style.footer}>
        <div className={`container p-3 p-md-5 ${style.container}`}>
          <div className={`row ${style.row}`}>
            <div className={`col-md-4 ${style.left}`}>
              <h4 className="text-uppercase mb-3 fw-bold">Location</h4>
              <p className="lead mb-0">2215 John Daniel Drive</p>
              <p className="lead mb-0">Clark, MO 65243</p>
            </div>
            <div className={`col-md-4 mt-2 ${style.mid}`}>
              <h4 className="text-uppercase mb-3 fw-bold">AROUND THE WEB</h4>
              <div className={`icons ${style.icons}`}>
                <div className={`icon ${style.icon}`}>
                  <i className={`fa-brands fa-facebook-f ${style.svg}`}></i>
                </div>
                <div className={`icon ${style.icon}`}>
                  <i className={`fa-brands fa-twitter ${style.svg}`}></i>
                </div>
                <div className={`icon ${style.icon}`}>
                  <i className={`fa-brands fa-linkedin-in ${style.svg}`}></i>
                </div>
                <div className={`icon ${style.icon}`}>
                  <i className={`fa-brands fa-dribbble ${style.svg}`}></i>
                </div>
              </div>
            </div>
            <div className={`col-md-4 mt-2 ${style.right}`}>
              <h4 className="text-uppercase mb-3 fw-bold">ABOUT FREELANCER</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </p>
            </div>
          </div>
        </div>
        <div className={`text-center p-2 ${style.secondFooter}`}>
          <p className="bm-0">Copyright © Your Website 2023</p>
        </div>
      </footer>
    </>
  );
}
