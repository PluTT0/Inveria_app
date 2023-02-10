import axios from 'axios';

const API_URL = '/api/tickets';

//Create new ticket
const createTicket = async (ticketData, token) => {
    const config = {
        headers: {
            authorization:`Inveria ${token}`
        }
    }
    const response =  await axios.post(API_URL, ticketData, config);

    return response.data;
};


//Get user tickets
const getTickets = async (token) => {
    const config = {
        headers: {
            authorization:`Inveria ${token}`
        }
    }
    const response =  await axios.get(API_URL, config);

    return response.data;
};

//Get simular ticket
const getTicket = async (ticketId ,token) => {
    const config = {
        headers: {
            authorization:`Inveria ${token}`
        }
    }
    const response =  await axios.get(`${API_URL}/${ticketId}`, config);

    return response.data;
};

//Change status to close
const closeTicket = async (ticketId ,token) => {
    const config = {
        headers: {
            authorization:`Inveria ${token}`
        }
    }
    const response =  await axios.put(`${API_URL}/${ticketId}`,{status: 'closed'}, config);

    return response.data;
};

//Reopen ticket
const reopenTicket = async (ticketId ,token) => {
    const config = {
        headers: {
            authorization:`Inveria ${token}`
        }
    }
    const response =  await axios.put(`${API_URL}/${ticketId}`,{status: 'new'}, config);

    return response.data;
};

//Delete ticket
const deleteTicket = async (ticketId ,token) => {
    const config = {
        headers: {
            authorization:`Inveria ${token}`
        }
    }
    const response =  await axios.delete(`${API_URL}/${ticketId}`, config);

    return response.data;
};
    
const ticketService = {
    createTicket,
    getTickets,
    getTicket,
    closeTicket,
    reopenTicket,
    deleteTicket,
};

export default ticketService;