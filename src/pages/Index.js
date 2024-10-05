import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => {
  return (
    <Main
      description={
        "Christian Joshua's portfolio website. Full Stack Developer and founder of Yean Technologies, showcasing a wide range of innovative projects, skills, and expertise in modern web development and business solutions."
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
              This platform serves as a personal portfolio and a testament to my
              work as a Full Stack Developer and entrepreneur. Here, you'll
              discover a range of projects, insights, and technical
              achievements, all crafted with a focus on innovation, modern web
              technologies, and user-centered design.
            </p>
          </div>
        </header>
        <p>
          Thank you for visiting! This site is designed to give you a
          comprehensive overview of who I am, both as a developer and a problem
          solver. As the founder of{" "}
          <a
            href="https://yeantech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>YEAN Technologies</strong>
          </a>
          , my work revolves around delivering cutting-edge software solutions
          and driving technological growth for businesses across various
          industries. You’ll find that my passion for technology is not just
          about writing code—it's about solving real-world problems, optimizing
          business processes, and constantly pushing the boundaries of what's
          possible.
        </p>
        <p>
          On this site, you can learn more <Link to="/about">about me</Link> and
          my professional background, explore the various{" "}
          <Link to="/projects">projects</Link> I've been involved in, including
          both individual work and collaborations with companies. Each project
          represents a blend of creativity, technical expertise, and a
          commitment to delivering high-quality results.
        </p>
        <p>
          For those interested in the technical side, I encourage you to check
          out the <Link to="/stats">site statistics</Link> page, where you can
          explore the behind-the-scenes metrics that provide insights into the
          performance and structure of this site itself. It’s a glimpse into how
          I approach data-driven decision-making and optimization in my work.
        </p>
        <p>
          If you're looking for someone to collaborate with, or if you simply
          want to chat about web development, technology, or business, feel free
          to <Link to="/contact">reach out</Link>. I’m always open to discussing
          new ideas, potential partnerships, or any opportunities where my
          skills can make an impact. I believe in the power of collaboration,
          and I’m excited to see how we can work together to create something
          amazing.
        </p>
        <p>
          Lastly, I invite you to explore this site fully. It’s not just a
          static collection of links—there are surprises hidden throughout,
          designed to inspire curiosity and reward exploration. Take a moment to
          zoom into the stars and see where your journey here takes you. I hope
          you enjoy the experience and leave with a deeper understanding of who
          I am and what drives me as a developer and entrepreneur.
        </p>
      </article>
    </Main>
  );
};

export default Index;
