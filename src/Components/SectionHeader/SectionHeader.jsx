import React from "react";
import style from "./SectionHeader.module.css";

export default function SectionHeader({ title, color ,  className }) {
  return (
    <>
      <div className="py-3 text-center ">
        <h2 className={`h1 fw-bold  ${color} ${className}`}>{title}</h2>
        <div className="position-relative">
          <div
            className={`${color} ${className} d-flex align-items-center justify-content-center h1 fw-bold ${style.bars}`}
          >
            <div
              className={`${style.before}`}
              style={{ background: color }}
            ></div>
            <i className="fa-solid fa-star"></i>
            <div
              className={`${style.after}`}
              style={{ background: color }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
