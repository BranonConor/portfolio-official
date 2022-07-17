import React from "react";
import styled from "styled-components";

const BlogTitle = (props) => {
  const { children, component, color } = props;

  if (component === "h1") {
    return <StyledH1 color={color}>{children}</StyledH1>;
  }
  if (component === "h2") {
    return <StyledH2 color={color}>{children}</StyledH2>;
  }
  if (component === "h3") {
    return <StyledH3 color={color}>{children}</StyledH3>;
  }
  if (component === "h4") {
    return <StyledH4 color={color}>{children}</StyledH4>;
  }
  if (component === "h5") {
    return <StyledH5 color={color}>{children}</StyledH5>;
  }
  if (component === "h6") {
    return <StyledH6 color={color}>{children}</StyledH6>;
  }

  return "ERROR - invalid component prop, please select h1 - h6";
};

export default BlogTitle;

const StyledH1 = styled.h1(
  ({ color }) => `
  color: ${color} || white;
  font-size: 53px;
  font-weight: 500;
  letter-spacing: -1px;

  @media only screen and (max-width: 601px) {
    font-size: 33px;
  }
`
);
const StyledH2 = styled.h2(
  ({ color }) => `
  color: ${color} || white;
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -0.5px;

  @media only screen and (max-width: 601px) {
    font-size: 28px;
  }
`
);
const StyledH3 = styled.h3(
  ({ color }) => `
  color: ${color} || white;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0px;

  @media only screen and (max-width: 601px) {
    font-size: 24px;
  }
`
);
const StyledH4 = styled.h4(
  ({ color }) => `
  color: ${color} || white;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.25px;

  @media only screen and (max-width: 601px) {
    font-size: 22px;
  }
`
);
const StyledH5 = styled.h5(
  ({ color }) => `
  color: ${color} || white;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 0px;

  @media only screen and (max-width: 601px) {
    font-size: 20px;
  }
`
);
const StyledH6 = styled.h6(
  ({ color }) => `
  color: ${color} || white;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 0.15px;

  @media only screen and (max-width: 601px) {
    font-size: 18px;
  }
`
);
