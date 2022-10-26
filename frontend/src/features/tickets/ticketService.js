import axios from 'axios';

const API_URL = '/api/tickets/';

const createTicket = async (ticketData, token) => {
    const config = {
        headers: {
            authorization:`Inveria ${token}`
        }
    }
    const response =  await axios.post(API_URL, ticketData, config);

    return response.data;
};

const ticketService = {
    createTicket,
};

export default ticketService;