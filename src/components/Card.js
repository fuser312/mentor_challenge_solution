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

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: white;
  text-align: center;
`;

const Card = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Card;
