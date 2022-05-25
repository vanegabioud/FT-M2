import React from "react";
import stilo from "./listo.module.css";

export default function Card(props) {
  // acá va tu código

  return (
    <div className={stilo.card}>
      <div>
        <span>{props.name}</span>
        <button className={stilo.boton}>X</button>
      </div>
      <div className={stilo.temp}>
        <div className={stilo.div}>
          <span>min</span>
          <span>{props.min}</span>
        </div>
        <div className={stilo.div}>
          <span>max</span>
          <span>{props.max}</span>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
