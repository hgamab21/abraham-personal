import React from "react";
import personal from "../../assets/IMG_1944.jpg";
import "../../styles/About.scss";

function About() {
  return (
    <div className="about-main">
      <h1 className="title">Who Am I?</h1>
      <img className="personal" src={personal}></img>
      <p className="info">
      I am a software engineer based out of Chicago, Illinois.
      <br></br>
      <br></br> 
      I've been on this strange journey of programming and development since I was 14. 
      I started out modding games for fun, and immediately fell in love with the art. Knowing that
      I was able to make sometimes monumental changes with just a few well-placed lines of text was
      something I could not resist. And I found the problem-solving process behind it absolutely fascinating.
      Figuring out what the system wanted, what it allowed you to do, what it didn't, how to
      creatively use those rules to do what I wanted, all of it.
      <br></br>
      <br></br>
      And when I found out there was a whole career path involving this I knew exactly what I wanted to do.
      <br></br>
      <br></br>
      I got my proper start with Java in high school, and was academically trained until the end of my tenure
      at Illinois Tech in 2011. From there my exposure expanded to include several languages and frameworks: C++, 
      Ruby, Swift, Objective-C, Android, Rails, and finally the Node ecosystem, React, Angular, and Vue. Although 
      the majority of my professional work has been within the scope of the Node ecosystem and its related frameworks, I've gained
      hands-on experience developing in all the above.
      </p>
      <p>
      </p>
    </div>
  );
}

export default About;
