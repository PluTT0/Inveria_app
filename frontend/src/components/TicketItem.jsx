import React from 'react';
import { Description, Ticket, TicketStatus, Title, Button, CardBottom, TimeCreation } from '../style/ticketsStyle';
import {Link} from 'react-router-dom';

const TicketItem = ({ticket}) => {
  
  console.log(new Date(ticket.createdAt).toString('us-US'));
  return (
    <>
      <Ticket>
        <TicketStatus style={{color: 'black'}}>Status: <span style={{color: ticket.status === 'closed' ? 'red' : 'black' , fontWeight: 600,}}>{ticket.status}</span></TicketStatus>
        <Title>
          {ticket.taskTitle}
        </Title>
        <Description>
          {ticket.description}
        </Description>
        <CardBottom>
          <Link to={`/tickets/${ticket._id}`}><Button>View</Button></Link>
          <TimeCreation>{new Date(ticket.createdAt).toDateString('us-US')}</TimeCreation>
        </CardBottom>
      </Ticket>
    </>
  );
};

export default TicketItem;
