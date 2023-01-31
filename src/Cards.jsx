import React from "react";
import Show1 from "./img/Orange_29.webp";
import Show2 from "./img/30df93feaa422101659e14d0a2a2f582.jpg";
import Show3 from "./img/998e27e91da1d67f7a8f0863dcc78616.jpg";
import title from "./App.js";
function Card(props) {
  return (
    <>
      <section className="card">
        <div className="container">
          <div className="pic">
            <img src={props.imgsrc} alt="pic" className="img" />
          </div>
          <div className="content">
            <h2>{props.title} </h2>
            <h4>
              <strong>Genre -</strong> {props.genre}
            </h4>
            <a href={props.link}>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
