import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

import {Container, TextContainer, Title, SubTitle, Button} from '../style/homePage';


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
