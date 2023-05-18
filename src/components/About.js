import React from "react";
import { image } from "../data/data";

function About() {
  // update the JSX being returned!
  return <div id="about">About
  <h2>About Me</h2>
  <p>I like to code</p>
  <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
