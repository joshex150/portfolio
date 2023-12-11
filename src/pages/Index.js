import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => {
  return (
    <Main
      description={
        "JOSHUA CHRISTIAN's personal website. New York based Stanford ICME graduate" +
        ", VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni."
      }
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>Welcome 🧍‍♂️</h2>
          </div>
        </header>
        <header>
          <div className="title">
            <h2>
              <Link to="/">About this site</Link>
            </h2>
            <p>
              A Stunning, Responsive, Statically-Generated React App Crafted
              with Modern JavaScript.
            </p>
          </div>
        </header>
        <p>
          {" "}
          Welcome to my website, for a better experience turn on your device's
          Dark Mode. Feel free to read more <Link to="/about">about me</Link>,
          checkout my <Link to="/projects">projects</Link>, view{" "}
          <Link to="/stats">site statistics</Link>, or{" "}
          <Link to="/contact">contact</Link> me and lastly, you can zoom into
          the stars for a surprise{" 😉"}
        </p>
      </article>
    </Main>
  );
};

export default Index;
