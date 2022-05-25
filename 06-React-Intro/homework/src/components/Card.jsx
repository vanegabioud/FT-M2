import React from 'react';

export default function Card({name, img, min, max}) {
  // acá va tu código
  return <div>
  <button>x</button>
  <h1>{name}</h1>
  <span>min: {min}</span>
  <span>max: {max}</span>
  <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} />
  </div>
};