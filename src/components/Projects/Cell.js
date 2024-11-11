import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import ImageRem from "../../layouts/Image";
import Slider from "react-slick"; // Import the slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cell = ({ data }) => {
  const sliderSettings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false, // Optional: remove arrows if using dots for navigation
  };

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>
            <a href={data.link}>{data.title}</a>
          </h3>
          <time className="published">
            {dayjs(data.date).format("MMMM, YYYY")}
          </time>
        </header>
        <div className="image-slider">
          <div>
            <a href={data.link} style={{ minHeight: "330px" }}>
              {Array.isArray(data.image) ? (
                <Slider {...sliderSettings}>
                  {data.image.map((img, index) => (
                    <img
                      key={index}
                      height={"100%"}
                      src={`${process.env.PUBLIC_URL}${img}`}
                      alt={data.title}
                    />
                  ))}
                </Slider>
              ) : (
                <img
                  height={"100%"}
                  style={{ width: "-webkit-fill-available" }}
                  src={`${process.env.PUBLIC_URL}${data.image}`}
                  alt={data.title}
                />
              )}
            </a>
          </div>
        </div>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.string) || PropTypes.string, // Changed to an array of images
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
