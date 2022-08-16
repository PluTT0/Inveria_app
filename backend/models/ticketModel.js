const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    user:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    taskTitle: {
      type: String,
      required: [true, 'Please select a task'],
      enum: ['Create platform', 'Dj', 'food']
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'inProgress', 'closed'],
      default: 'new',
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);