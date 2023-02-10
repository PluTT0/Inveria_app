import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import { getTicket, closeTicket, reopenTicket, deleteTicket } from '../features/tickets/ticketSlice';
import BackButton from '../components/BackButton';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Container, TicketId, Title, TicketWrapper, Desctiption, TicketStatus, DataCreated, TicketInfo, UserInfo, UserName, CloseButton, DeleteButton, ButtonWrapper, ReopenButton} from '../style/ticketStyle';


const Ticket = () => {
  const { ticket, isLoading, isSuccess, isError, message }= useSelector((state) => state.tickets);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    if(isError) {
      toast.error(message);
    };

    dispatch(getTicket(ticketId));

  },[dispatch, isError, isSuccess, message, ticketId]);

  //close Ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success('Ticket closed');
    navigate('/tickets')
  };

 // delete function
  const onDeleteTicket = () => {
    dispatch(deleteTicket(ticketId));
    toast.success('Ticket is deleted');
    navigate('/tickets')
  };

  // reopen function
  const setNewStatus = () => {
    dispatch(reopenTicket(ticketId));
    toast.success('Ticket is reopened');
    navigate('/tickets')
  }

  //component render

  if(isLoading) {
    return <Spinner/>
  } else if(isError) {
    return <Title>Something was wrong</Title>
  }
  
  return (
    <Container>
        <ButtonWrapper>
          <BackButton url='/tickets' />
        </ButtonWrapper>
        <h1 style={{textAlign: 'center'}}>Ticket</h1>
        <TicketWrapper>
          <Title>{ticket.taskTitle}</Title>
          <TicketInfo>
            <TicketId>Ticket Id: <span>{ticket._id}</span></TicketId>
            <TicketStatus>Ticket status: <span>{ticket.status}</span></TicketStatus>
            <DataCreated>Data creation: <span>{new Date(ticket.createdAt).toDateString('us-US')}</span></DataCreated>
          </TicketInfo>
          <Desctiption>{ticket.description}</Desctiption>
          <UserInfo>
            <UserName>
              {user.name}
            </UserName>
          </UserInfo>
          <ButtonWrapper>
            {
              ticket.status !== 'closed' 
              ?
                (<CloseButton onClick={onTicketClose}>Close</CloseButton>)
              :
                (
                <ButtonWrapper style={{display: 'flex'}}>
                  <DeleteButton onClick={onDeleteTicket}>Delete</DeleteButton>
                  <ReopenButton onClick={setNewStatus}>Reopen</ReopenButton>
                </ButtonWrapper>
                )
            }
            
          </ButtonWrapper>
        </TicketWrapper>
    </Container>
  )
}

export default Ticket;