import React from "react";
import styled from "styled-components";
import ChipButton from "../buttons/ChipButton";

const BlogPostDetails = (props) => {
  const { author, category, createdAt, tags } = props;
  console.log(tags);
  return (
    <StyledDetailsWrapper>
      <StyledP>
        {author.name}, {createdAt}
      </StyledP>
      <StyledP>
        Category: <ChipButton content={category} />
      </StyledP>
      <StyledTagWrapper>
        Tags:
        {tags.map((tag) => (
          <ChipButton content={tag} isSecondary />
        ))}
      </StyledTagWrapper>
    </StyledDetailsWrapper>
  );
};

export default BlogPostDetails;

const StyledDetailsWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 16px 32px;
  background: #111111;
  border-radius: 10px;
  box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const StyledP = styled.p`
  width: auto;
  display: flex;
  align-items: center;
`;

const StyledTagWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
