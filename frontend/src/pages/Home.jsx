import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 20px;
`;

const TextContainer = styled.div`
  margin: 10px 0 25px 0;
`;

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  line-height: 1.7;
  color: #828282;
`;

const Button = styled.button`
  width: 100%;
  margin-bottom: 20px;
  max-width: 250px;
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: ${props => props.reverse ? "#fff" : "#000"};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  appearance: button;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.reverse ? "#000" : "#fff"};
    svg{
      margin: 5px;
    }
  &:hover {
    background: #727272;
    transition: 0.5s ease;
  }
`;


const Home = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <Title>
            Hello, this is my app.
          </Title>
          <SubTitle>Please, create new ticket</SubTitle>
        </TextContainer>
        <Button reverse={"#fff"} as={Link} to='/new-ticket' >
          <FaQuestionCircle /> Create New Ticket
        </Button>
        <Button as={Link} to='/tickets' >
          <FaTicketAlt /> View My Tickets
        </Button>
      </Container>
    </>
  );
};

export default Home;
