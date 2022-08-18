const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @dec Get user tickets
// @roue GET /api/tickets
// @access Private
const getTickets = asyncHandler( async (req, res) => {
    // get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const tickets = await Ticket.find({user: req.user.id})

    res.status(201).json(tickets)
});

// @dec Get one ticket
// @roue GET /api/tickets/:id
// @access Private
const getTicket = asyncHandler( async (req, res) => {
    // get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User is not found')
    }

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(401);
        throw new Error('Ticket not found')
    }

    
    if(ticket.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not Autorized')
    }

    res.status(201).json(ticket)
});
  
// @dec create new tickets
// @roue POST /api/tickets
// @access Private

const createTicket = asyncHandler( async (req, res) => {
    const { taskTitle, description } = req.body;

    if(!taskTitle || !description) {
        res.status(400);
        throw new Error('Please add a task and description')
    }

    // get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.create({
        taskTitle,
        description,
        user: req.user.id,
        status: 'new',
    });


    res.status(201).json(ticket)
});

// @dec Delete ticket
// @roue DELETE /api/tickets/:id
// @access Private
const deleteTicket = asyncHandler( async (req, res) => {
    // get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User is not found')
    }

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(401);
        throw new Error('Ticket not found')
    }

    
    if(ticket.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not Autorized')
    }

    await ticket.remove()

    res.status(200).json({ success: true })
});

// @dec Update ticket
// @roue PUT /api/tickets/:id
// @access Private
const updateTicket = asyncHandler( async (req, res) => {
    // get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User is not found')
    }

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(401);
        throw new Error('Ticket not found')
    }

    
    if(ticket.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not Autorized')
    }

    const updateTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updateTicket)
})


module.exports = {
    getTickets,
    createTicket,
    getTicket,
    deleteTicket,
    updateTicket,
};