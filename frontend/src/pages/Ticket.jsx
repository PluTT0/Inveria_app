import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import {
  getTicket,
  closeTicket,
  reopenTicket,
  deleteTicket,
} from "../features/tickets/ticketSlice";
import { getNotes, createNote, reset as notesReset } from "../features/notes/noteSlice";
import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import {
  Container,
  TicketId,
  Title,
  TicketWrapper,
  Desctiption,
  TicketStatus,
  DataCreated,
  TicketInfo,
  UserInfo,
  UserName,
  CloseButton,
  DeleteButton,
  ButtonWrapper,
  ReopenButton,
} from "../style/ticketStyle";
import NoteItem from "../components/NoteItem";
import { AddBtn, TextAreaNote, Xbtn } from "../style/modalWindow";

const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    bottom: "auto",
    right: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

Modal.setAppElement("#root");

const Ticket = () => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ noteText, setNoteText ] = useState('');

  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );
  const { user } = useSelector((state) => state.auth);

  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
  }, [dispatch, isError, isSuccess, message, ticketId]);

  //close Ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket closed");
    navigate("/tickets");
  };

  //create note Submit
  const onNoteSubmit = (e) => {
    e.preventDefault()
    dispatch(createNote({noteText, ticketId}))
    closeModal()
    setNoteText('')
  };

  // delete function
  const onDeleteTicket = () => {
    dispatch(deleteTicket(ticketId));
    toast.success("Ticket is deleted");
    navigate("/tickets");
    notesReset()
  };

  // reopen function
  const setNewStatus = (e) => {
    console.log(e.target);
    dispatch(reopenTicket(ticketId));
    toast.success("Ticket is reopened");
    navigate("/tickets");
  };

  //Open/close modal
  const openModal = () => {
    setModalIsOpen(true)
  };
  const closeModal = () => {
    setModalIsOpen(false)
  };

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  } else if (isError) {
    return <Title>Something went wrong</Title>;
  }
  //component render
  return (
    <Container>
      <ButtonWrapper>
        <BackButton url="/tickets" />
      </ButtonWrapper>
      <h1 style={{ textAlign: "center" }}>Ticket</h1>
      <TicketWrapper>
        <Title>{ticket.taskTitle}</Title>
        <TicketInfo>
          <TicketId>
            Ticket Id: <span>{ticket._id}</span>
          </TicketId>
          <TicketStatus>
            Ticket status: <span>{ticket.status}</span>
          </TicketStatus>
          <DataCreated>
            Data creation:{" "}
            <span>{new Date(ticket.createdAt).toDateString("us-US")}</span>
          </DataCreated>
        </TicketInfo>
        <Desctiption>{ticket.description}</Desctiption>
        <UserInfo>
          <UserName>{user.name}</UserName>
        </UserInfo>
        <ButtonWrapper>
          {ticket.status !== "closed" ? (
            <ButtonWrapper>
              <CloseButton onClick={onTicketClose}>Close</CloseButton>
              <AddBtn onClick={openModal} ><FaPlus /> Add Note</AddBtn>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper style={{ display: "flex" }}>
              <DeleteButton onClick={onDeleteTicket}>Delete</DeleteButton>
              <ReopenButton onClick={setNewStatus}>Reopen</ReopenButton>
            </ButtonWrapper>
          )}
        </ButtonWrapper>
      </TicketWrapper>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Note">
        <Title style={{margin: "10px"}}>Add Note</Title>
        <form onSubmit={onNoteSubmit}>
          <div className="from-group">
            <TextAreaNote 
              id="noteText" 
              className="form-control" 
              placeholder="Note text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></TextAreaNote>
          </div>
          <div className="from-group">
            <button className="btn" type='submit'>
              Submit
            </button>
          </div>
        </form>
        <Xbtn onClick={closeModal}>X</Xbtn>
      </Modal>
      <h2>Notes</h2>
      {notes.map((note) => {
        return <NoteItem note={note} key={note._id} />;
      })}
    </Container>
  );
};

export default Ticket;
