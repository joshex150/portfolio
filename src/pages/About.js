import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import mePdf from "../data/me.pdf";
import Main from "../layouts/Main";

const About = () => {
  const [markdown, setMarkdown] = useState("");
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  useEffect(() => {
    import("../data/about.md").then((res) => {
      fetch(res?.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ""))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about JOSHUA CHRISTIAN">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown> <br />
        <a href={mePdf} download="Joshua Christian's CV.pdf" className="button">
          {isIOS ? "Tap and Hold to Download Resume" : "Download Resume"}
        </a>
        <br />
        <br />
      </article>
    </Main>
  );
};

export default About;
