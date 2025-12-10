import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => {
  return (
    <Main
      description={
        "Christian Joshua's portfolio website. Full Stack Developer and founder of Yean Technologies, showcasing projects, skills, and expertise in modern web development and business solutions."
      }
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>Welcome to My Journey</h2>
          </div>
        </header>
        <header>
          <div className="title">
            <h2>
              <Link to="/">About This Site</Link>
            </h2>
            <p>
              This is my personal portfolio where I share my work as a Full
              Stack Developer and entrepreneur. You'll find projects I've built,
              things I've learned, and some of the technical stuff I'm proud of.
              I built this with modern web tech and tried to keep it simple and
              user-friendly.
            </p>
          </div>
        </header>
        <p>
          Thanks for stopping by! I built this site to share a bit about who I
          am as a developer and problem solver. I'm the founder of{" "}
          <a
            href="https://yeantech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>YEAN Technologies</strong>
          </a>
          , where I work on building software that actually helps businesses.
          For me, coding isn't just about writing code. It's about solving real
          problems, making things run smoother, and seeing what's possible when
          you put technology to work.
        </p>
        <p>
          Feel free to check out the <Link to="/about">about page</Link> to
          learn more about my background, or browse through the{" "}
          <Link to="/projects">projects</Link> I've worked on. Some are solo
          projects, others are collaborations with companies. I try to bring
          creativity and solid technical skills to everything I build.
        </p>
        <p>
          If you're into the technical details, take a look at the{" "}
          <Link to="/stats">site statistics</Link> page. It shows some
          behind-the-scenes metrics about how this site is built and how it
          performs. It's a fun way to see how I think about optimization and
          making things work better.
        </p>
        <p>
          Want to collaborate or just chat about web development, technology, or
          business? Feel free to <Link to="/contact">reach out</Link>. I'm
          always up for talking about new ideas, potential partnerships, or
          projects where I can help. I love working with others and seeing what
          we can build together.
        </p>
        <p>
          Take your time exploring the site. It's not just a bunch of links.
          There are some fun surprises hidden around if you look for them. Try
          zooming into the stars and see what you find. I hope you enjoy poking
          around and get a sense of who I am and what I'm about as a developer
          and entrepreneur.
        </p>
      </article>
    </Main>
  );
};

export default Index;
