import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styled from "styled-components";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;