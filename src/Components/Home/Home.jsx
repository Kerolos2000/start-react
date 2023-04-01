import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from "./Home.module.css";
import img from "../../img/avataaars.svg";

export default function Home() {
  return (
    <section className={style.Home}>
      <div className={`container ${style.container}`}>
        <img className={style.avatarx} src={img} alt="avatar" />
        <SectionHeader title="START REACT" color="white" />
        <p className="h2">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
