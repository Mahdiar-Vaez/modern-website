import React from "react";
import "./posibility.css";
import posibility from "../../../assets/Feature Image.png";
export default function Posibility() {
  return (
    <div className="gpt3__posibilty section__padding" id="possibility">
      <div className=" gpt3__posibilty-image">
        <img src={posibility} alt="Feature Image" />
      </div>
      <div className="gpt3__posibilty-content">
        <h4> Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
