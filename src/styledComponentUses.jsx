import React from "react";
import styled from "styled-components";

const Component = () => {
  const StyledButton = styled.button`
    text-align: center;
    font-size: 28px;
    border: 1px solid palevioletred;
    padding: 5px 35px;
    border-radius: 20px;
    background-color: palevioletred;
    color: white;
  `;
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 3em;
    background: papayawhip;
    text-align: center;
  `;

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <div>
        <StyledButton>Normal</StyledButton>
      </div>
    </Wrapper>
  );
};

export default Component;
