import "./button-primary.css";
import "aos/dist/aos.css";
import Link from "gatsby-link";

import React, { useEffect } from "react";

import AOS from "aos";

const ButtonPrimary = (props) => {
  const { link, download, animation, animationTime, icon, content } = props;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  if (download) {
    return (
      <a
        href={link}
        className="ButtonPrimary button-text"
        download={download}
        data-aos={animation}
        data-aos-duration={animationTime}
      >
        {/* if an icon prop is passed, display it */}
        {icon && <img src={icon} alt="Button Icon" width="30" height="30" />}
        {/* display the content passed as a prop i.e. - what goes inside the button? */}
        {content}
      </a>
    );
  }

  return (
    <Link
      to={link}
      className="ButtonPrimary button-text"
      data-aos={animation}
      data-aos-duration={animationTime}
    >
      {/* if an icon prop is passed, display it */}
      {icon && <img src={icon} alt="Button Icon" width="30" height="30" />}
      {/* display the content passed as a prop i.e. - what goes inside the button? */}
      {content}
    </Link>
  );
};

export default ButtonPrimary;
