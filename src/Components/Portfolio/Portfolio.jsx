import React from "react";
import img1 from "../../img/cabin.png";
import img2 from "../../img/cake.png";
import img3 from "../../img/circus.png";
import img4 from "../../img/game.png";
import img5 from "../../img/safe.png";
import img6 from "../../img/submarine.png";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from "./Portfolio.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Portfolio() {
  function showModal(img,title) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: (
        <>
          <div className="container d-flex flex-column align-items-center pb-3">
            <SectionHeader title={title} color="#2c3e50" className="main" />
          </div>
        </>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      imageUrl: img,
      imageHeight: "auto",
      imageAlt: "Custom image",
    });
  }

  return (
    <section>
      <div className="container d-flex flex-column align-items-center pb-3">
        <SectionHeader title="PORTFOLIO" color="#2c3e50" className="main" />
        <div className="row g-3">
          <div className="col-md-4">
            <div
              onClick={() => {
                showModal(img1, "cabin");
              }}
              className={style.cardx}
            >
              <img className="img-fluid" src={img1} alt="cabin" />
            </div>
          </div>

          <div className="col-md-4">
            <div
              onClick={() => {
                showModal(img2, "cake");
              }}
              className={style.cardx}
            >
              <img className="img-fluid" src={img2} alt="cake" />
            </div>
          </div>

          <div className="col-md-4">
            <div
              onClick={() => {
                showModal(img3, "circus");
              }}
              className={style.cardx}
            >
              <img className="img-fluid" src={img3} alt="circus" />
            </div>
          </div>

          <div className="col-md-4">
            <div
              onClick={() => {
                showModal(img4, "game");
              }}
              className={style.cardx}
            >
              <img className="img-fluid" src={img4} alt="game" />
            </div>
          </div>

          <div className="col-md-4">
            <div
              onClick={() => {
                showModal(img5, "safe");
              }}
              className={style.cardx}
            >
              <img className="img-fluid" src={img5} alt="safe" />
            </div>
          </div>

          <div className="col-md-4">
            <div
              onClick={() => {
                showModal(img6, "submarine");
              }}
              className={style.cardx}
            >
              <img className="img-fluid" src={img6} alt="submarine" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
