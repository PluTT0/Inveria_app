import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

import {
  Container,
  Title,
  SubTitle,
  Form,
  InputWrapper,
  Input,
  Button,
} from '../style/loginPageStyle';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const  {email, password} = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, isLoading, isError, isSuccess, message} = useSelector(
      state => state.auth
  );

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    // Redirect when logged in

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  },[isLoading, isError, isSuccess, user, dispatch, navigate, message])


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

  if(isLoading) {
    return (
      <Spinner />
    )
  }


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
