import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset }  from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { TicketSection, FilterContainer, TicketContainer } from '../style/tickets';
import TicketItem from '../components/TicketItem';

const Tickets = () => {
  const { tickets, isLoading, isSuccess} = useSelector((state) => state.tickets)
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch]);

  if(isLoading) {
    return <Spinner/>
  };

  return (
    <>
      <BackButton url="/" />
      <h1 style={{textAlign: "center"}}>Tickets</h1>
      <TicketContainer>
        
        <FilterContainer>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
        </FilterContainer>
        <TicketSection>
          {
            tickets.map((ticket) => {
              return(<TicketItem key={ticket._id} ticket={ticket} />
            )})
          }
        </TicketSection>
      </TicketContainer>
    </>
  );
};

export default Tickets;
