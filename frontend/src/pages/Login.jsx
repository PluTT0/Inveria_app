import React, { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector, useDispatch} from 'react-redux';
import { login } from '../features/auth/authSlice';

const Container = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 20px;
`;
const Title = styled.h1`
  margin-top: 30px;
  svg {
    padding-top: 10px;
  }
`;
const SubTitle = styled.p`
  margin: 20px 0;
`;

const Form = styled.form`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  max-width: 350px;
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

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const  {email, password} = formData;

  const dispatch = useDispatch();

  const {user, isLoading, isSuccess, message} = useSelector(
      state => state.auth
  );

  const onChange = (ev) => {
    ev.preventDefault()
    setFormData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value
    }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };


  return (
    <>
      <Container>
        <Title>
          <FaSignInAlt /> Login
        </Title>
        <SubTitle>
          Please Login
        </SubTitle>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <Input type='email' value={email} name='email' onChange={onChange} placeholder='Enter user email' required />
            <Input type='password' value={password} name='password' onChange={onChange} placeholder='Enter user password' required />
          </InputWrapper>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    </>
  )
}

export default Login
