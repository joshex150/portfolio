import React from "react";
import { Link, useLocation } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>JOSHUA CHRISTIAN</h2>
          <p>
            <a href="mailto:Joshex150@gmail.com">Joshex150@gmail.com</a>
          </p>
        </header>
      </section>

      {pathname !== "/about" ? (
        <section className="blurb">
          <h2>About</h2>
          <p>
            Hi, I&apos;m JOSHUA. I am an{" "}
            <a href="https://www.abuad.edu.ng">Afe Babalola University</a>{" "}
            graduate with a degree in Computer Engineering, Proficient in
            JavaScript, TypeScript, React, Vite, Node.js, Express.js, HTML, CSS,
            MongoDB, Firebase, and SQL, I'm a passionate full stack web
            developer. My skills span front-end and back-end, thriving in
            dynamic setups where I impact the software lifecycle. I turn design
            into functional UI with JavaScript, TypeScript, HTML, and CSS,
            ensuring responsive, appealing pages. I'm all about efficient dev
            with modern frameworks. In back-end, I ace building robust
            server-side apps using Node.js and Express.js. I'm into RESTful
            APIs, authentication, and performance tweaks. My DB skills cover
            MongoDB, Firebase, and SQL, ensuring smooth data flow. A problem
            solver at heart, I prioritize clean, updated code following industry
            trends. My strength lies in cross-functional teamwork, bridging tech
            and non-tech communication. I'm a learner, always seeking growth and
            eager to tackle innovative web projects. If you need a motivated
            full stack developer with skills in JavaScript, TypeScript, Node.js,
            Express.js, HTML, CSS, MongoDB, Firebase, SQL and a lot more! 👋🚀
          </p>
          <ul className="actions">
            <li>
              {!window.location.pathname.includes("/resume") ? (
                <Link to="/contact" className="button">
                  Contact Me
                </Link>
              ) : (
                <Link to="/about" className="button">
                  About Me
                </Link>
              )}
            </li>
          </ul>
        </section>
      ) : (
        <></>
      )}

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; JOSHUA CHRISTIAN <Link to="/">josh-folio.web.app</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
