import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

import { 
  Container,
  Left,
  Right,
  Center,
  Logo,
  ButtonsContainer,
  NavigateLink,
  LogoutButton
} from '../style/navBarStyle'



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
