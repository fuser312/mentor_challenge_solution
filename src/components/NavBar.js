import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #424651;
  height: 3rem;
  margin-bottom: 4rem;
`;

const NavbarItem = styled.a`
  font-size: 1rem;
  margin-right: 1rem;
  color: white;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>About</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </Wrapper>
  );
};

export default Navbar;
