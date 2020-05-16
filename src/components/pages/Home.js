import React from "react";
import "../../styles/Home.scss";
import Button from "../Button";

function Home() {
  return (
    <div className="home-main">
      <h1 className="title">Hiram Abraham</h1>
      <p className="tagline">
      Developer. Designer. Using technology to bring visions to life.
      </p>
      <p>Hands-on experience with:</p>
      
  <Button label = "Get in Touch"></Button>
    </div>
  );
}

export default Home;
