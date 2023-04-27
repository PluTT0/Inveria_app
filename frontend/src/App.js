import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styled from "styled-components";
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import NewTicket from './pages/NewTicket';
import Register from './pages/Register';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/new-ticket' element={<PrivateRoute />} >
            <Route path='/new-ticket' element={<NewTicket />} />
          </Route>
          <Route path='/tickets' element={<PrivateRoute />} >
            <Route path='/tickets' element={<Tickets />} />
          </Route>
          <Route path='/tickets/:ticketId' element={<PrivateRoute />} >
            <Route path='/tickets/:ticketId' element={<Ticket />} />
          </Route>
        </Routes>
      </Container>
      <ToastContainer />
    </>
  );
};

export default App;
