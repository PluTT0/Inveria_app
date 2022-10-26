import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
const Container = styled.div`
  text-align: center;
  max-width: 1280px;
`;
const TextWrapper = styled.div`
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 20px auto;
`;

const Form = styled.form`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 5px;
  font-size: 14px;
  opacity: 0.7;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  appearance: button;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewTicket = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.ticket);
  
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
              <TextArea type='text' name='description' onChange={(e) => setDescription(e.target.value)} placeholder='Enter description' value={description} />

              <Button>Sumbit</Button>
            </Form>
          </FormWrapper>
        </TextWrapper>
      </Container>
    </>
  )
};

export default NewTicket;
