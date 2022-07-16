import React from "react";
import styled from "styled-components";

const ChipButton = (props) => {
  const { content, link, isSecondary } = props;

  return (
    <StyledChip isSecondary={isSecondary} href={link}>
      {content}
    </StyledChip>
  );
};

export default ChipButton;

const StyledChip = styled.a(
  ({ isSecondary }) => `
  height: auto;
  width: auto;
  padding: 8px 16px;
  background: ${isSecondary ? "#0080c7" : "#ff0096"};
  border-radius: 20px;
  margin: 4px;

  &:hover {
    background: #189ee6;
  }
`
);
