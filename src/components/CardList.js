import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Card from "./Card";
import data from "../data";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = () => {
  return (
    <>
      <Title main>List of articles</Title>
      <Wrapper>
        {data.articles.map((article) => (
          <Card
            title={article.title}
            description={article.description}
            url={article.image}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default CardList;
