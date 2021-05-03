import React from "react";
import styled from "styled-components";

import Title from "./Title";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  /* height: 250px; */
  background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  transition: transform 0.6s;
  & img {
    width: 250px;
    display: none;
    visibility: hidden;
  }
  &:hover {
    justify-content: center;
    opacity: 0.5;
    cursor: pointer;
    transform: rotateY(180deg);
    transform-style: preserve-3d;
    & * {
      visibility: hidden;
      display: none;
    }
    & img {
      display: initial;
      visibility: initial;
    }
  }
`;

const Description = styled.p`
  color: white;
  text-align: center;
`;

const Card = ({ title, description, url }) => {
  return (
    // <FlipElement>
    <Wrapper>
      <img src={url} alt="a beautiful art"></img>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
    // {/* </FlipElement> */}
  );
};

export default Card;
