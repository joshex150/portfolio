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
            Hi, I'm JOSHUA, a Computer Engineer specialized in web development.
            I am a passionate full stack web developer, proficient in
            JavaScript, TypeScript, React, Vite, Node.js, Express.js, HTML, CSS,
            MongoDB, Firebase, and SQL. My expertise spans both front-end and
            back-end development, thriving in dynamic environments where I
            contribute across the entire development lifecycle.
          </p>

          {/* <p>
            On the front-end, I specialize in transforming designs into
            responsive, visually appealing user interfaces using JavaScript,
            TypeScript, HTML, and CSS, all while leveraging modern frameworks
            for efficient development. On the back-end, I excel at building
            robust server-side applications with Node.js and Express.js, and I'm
            well-versed in RESTful APIs, authentication, and performance
            optimization. My database skills include MongoDB, Firebase, and SQL,
            ensuring smooth data flow and storage solutions.
          </p>

          <p>
            I'm a problem solver at heart, always following industry trends to
            maintain clean, up-to-date code. My strength lies in collaborating
            with cross-functional teams, effectively bridging technical and
            non-technical communication. A lifelong learner, I'm always eager to
            grow and take on innovative web development projects. If you're
            looking for a motivated full stack developer with a passion for
            cutting-edge technology and modern frameworks, I'd love to connect!
            👋🚀
          </p> */}

          <ul className="actions">
            <li>
              {pathname === "/about" ? (
                <Link to="/contact" className="button">
                  Contact Me
                </Link>
              ) : pathname === "/contact" ? (
                <Link to="/about" className="button">
                  About Me
                </Link>
              ) : (
                <Link to="/contact" className="button">
                  Contact Me
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
          &copy; JOSHUA CHRISTIAN <Link to="/">kachi.yeantech.com/</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
