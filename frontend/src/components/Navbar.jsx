import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  margin-top: 20px;
  text-align: center;
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: 300;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`; 

const Button = styled.button`
  padding: 5px;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
    svg {
      margin: 5px;
    }
`;
const Navbar = () => {
  return (
    <>
      <Container>
        <Left>
          <NavLink to='/'>Home</NavLink>
        </Left>
        <Center>
          <Logo>Inveria App</Logo>
        </Center>
        <Right>
          <ButtonsContainer>
            <Button as={Link} to="login">
              <FaSignInAlt /> Login
            </Button>
            <Button as={Link} to="register">
              <FaUser  /> Register
            </Button>
          </ButtonsContainer>
        </Right>
      </Container>
    </>
  )
}

export default Navbar
