import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

import { Container, TextArea, TextWrapper, Label, Input, Form, FormWrapper, Button} from '../style/newTicketPageSyle';


const NewTicket = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.tickets);
  
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(isError) {
      toast.error(message);
    };

    if(isSuccess) {
      dispatch(reset());
      navigate('/tickets')
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, message, navigate]);


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({taskTitle, description}))
  };


  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Container>
        
        <BackButton url='/'/>
        <TextWrapper>
          <h1>Please, create you ticket</h1>
          <p>Please fill out the form below</p>
          <FormWrapper>
            <Form>

              <Label htmlFor="name">Customer name</Label>
              <Input type='text' value={name} disabled />

              <Label htmlFor="email">Customer Email</Label>
              <Input type='text' value={email} disabled />
            </Form>
            <Form onSubmit={onSubmit}>
              <Label htmlFor="email">Tasktitle</Label>
              <Input type='text' name='title' onChange={(e) => setTaskTitle(e.target.value)} placeholder='Enter title' value={taskTitle}/>
              
              <Label htmlFor="email">Task description</Label>
              <TextArea id="description" type='text' name='description' onChange={(e) => setDescription(e.target.value)} placeholder='Enter description' value={description} />

              <Button>Sumbit</Button>
            </Form>
          </FormWrapper>
        </TextWrapper>
      </Container>
    </>
  )
};

export default NewTicket;
