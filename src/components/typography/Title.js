import React from "react";
import styled from "styled-components";

const BlogTitle = (props) => {
  const { children, component } = props;

  if (component === "h1") {
    return <StyledH1>{children}</StyledH1>;
  }
  if (component === "h2") {
    return <StyledH2>{children}</StyledH2>;
  }
  if (component === "h3") {
    return <StyledH3>{children}</StyledH3>;
  }
  if (component === "h4") {
    return <StyledH4>{children}</StyledH4>;
  }
  if (component === "h5") {
    return <StyledH5>{children}</StyledH5>;
  }
  if (component === "h6") {
    return <StyledH6>{children}</StyledH6>;
  }

  return "ERROR - invalid component prop, please select h1 - h6";
};

export default BlogTitle;

const StyledH1 = styled.h1`
  font-size: 93px;
  font-weight: 300;
  letter-spacing: -1.5px;
`;
const StyledH2 = styled.h2`
  font-size: 58px;
  font-weight: 300;
  letter-spacing: -0.5px;
`;
const StyledH3 = styled.h3`
  font-size: 46px;
  font-weight: 500;
  letter-spacing: 0px;
`;
const StyledH4 = styled.h4`
  font-size: 33px;
  font-weight: 500;
  letter-spacing: 0.25px;
`;
const StyledH5 = styled.h5`
  font-size: 23px;
  font-weight: 500;
  letter-spacing: 0px;
`;
const StyledH6 = styled.h6`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.15px;
`;
