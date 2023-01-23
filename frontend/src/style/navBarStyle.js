import styled from "styled-components";


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

export {
  Container,
  Left,
  Right,
  Center,
  Logo,
  ButtonsContainer,
  NavigateLink,
  LogoutButton
};