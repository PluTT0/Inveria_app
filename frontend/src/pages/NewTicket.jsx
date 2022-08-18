import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;
const TextWrapper = styled.div`
  
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
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

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <>
      <Container>
        new ticket
      </Container>
    </>
  )
};

export default NewTicket;
