import styled from "styled-components";

const TicketSection = styled.div`
  display: flex;
  flex-direction: space-between;
  flex-wrap: wrap;
  flex-direction: column;
`;

const TicketContainer = styled.div`
  padding: 0 25px;
`;

const Ticket = styled.div`
  position:relative;
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid #f2f2f2;
  max-width: 800px;
`;

const Title = styled.h4`
  display: block;
  margin: 20px 10px;
  min-height: 30px;
  border-bottom: 1px solid #f2f2f2;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: left;
  padding: 0 10px 15px;
  margin-bottom: 25px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  
`;

const TicketStatus = styled.p`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 12px;
  background-color: rgba(204, 231, 198, 1);
  padding: 0 5px;
  border-radius: 7px;
  color: white;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -5px -10px;
  padding:  10px 15px;
  background-color: rgba(242, 242, 242, 0.5);
`;

const TimeCreation = styled.span`

`;

const Button = styled.button`
  margin: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  appearance: button;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  TicketSection,
  Ticket,
  Title,
  Description,
  FilterContainer,
  TicketStatus,
  TicketContainer,
  Button,
  TimeCreation,
  CardBottom,
}