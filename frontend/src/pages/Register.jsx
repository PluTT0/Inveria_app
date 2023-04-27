import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSelector, useDispatch} from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

import {
  Container,
  Title,
  SubTitle,
  Input,
  InputWrapper,
  Form,
  Button,
} from '../style/registerPageStyle';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const {name, email, password, password2} = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth);

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
    }))
  }

  const onSubmit = (ev) => {
    ev.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return (
      <Spinner />
    )
  }
  return (
    <>
      <Container>
        <Title>
          <FaUser/> Register
        </Title>
        <SubTitle>
          Please create user
        </SubTitle>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <Input type='text' value={name} name='name' onChange={onChange} placeholder='Enter user name' required />
            <Input type='email' value={email} name='email' onChange={onChange} placeholder='Enter user email' required />
            <Input type='password' value={password} name='password' onChange={onChange} placeholder='Enter user password' required />
            <Input type='password2' value={password2} name='password2' onChange={onChange} placeholder='Enter user password2' required />
          </InputWrapper>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    </>
  )
}

export default Register
