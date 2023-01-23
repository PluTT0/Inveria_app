import React from 'react';
import { Description, Ticket, TicketStatus, Title, Button } from '../style/tickets';
import {Link} from 'react-router-dom';

const TicketItem = ({ticket}) => {
  
  console.log(ticket);
  return (
    <>
      <Ticket>
        <TicketStatus>{ticket.status}</TicketStatus>
        <Title>
          {ticket.taskTitle}
        </Title>
        <Description>
          {ticket.description}
        </Description>
        <Link to={`/ticket/${ticket._id}`}><Button>View</Button></Link>
      </Ticket>
    </>
  );
};

export default TicketItem;
