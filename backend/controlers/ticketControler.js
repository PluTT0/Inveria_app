const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @dec Get user tickets
// @roue GET /api/tickets
// @access Private

const getTickets = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'getTickets'})
  })
  
// @dec Get user tickets
// @roue POST /api/tickets
// @access Private

const createTicket = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'createTickets'})
  })

module.exports = {
    getTickets,
    createTicket,
}