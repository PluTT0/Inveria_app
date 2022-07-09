import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

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

const NavigateLink = styled.a`
  padding: 5px;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
    svg {
      margin: 5px;
    }
`;

const LogoutButton = styled.button`
  font-family: 'Poppins', 'sans-serif';
  text-decoration: none;
  font-size: 16px;
  color: #000;
  border: none;
  background-color: #fff;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
    svg {
      margin: 5px;
    }
`;


const Navbar = () => {
  const navigate = useNavigate();
  const  dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


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
          {
            user ? 
            (
              <ButtonsContainer>
                <LogoutButton onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </LogoutButton>
              </ButtonsContainer>
            ) : (
              <ButtonsContainer>
                <NavigateLink as={Link} to="login">
                  <FaSignInAlt /> Login
                </NavigateLink>
                <NavigateLink as={Link} to="register">
                  <FaUser /> Register
                </NavigateLink>
              </ButtonsContainer>
            )
          }
        </Right>
      </Container>
    </>
  )
}

export default Navbar
