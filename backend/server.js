const express = require('express');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const dotenv = require(`dotenv`);
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const path = require('path')

dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json('Hello')
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));


// Serve Frontend
if (process.env.NODE_ENV==='production') {
  //set build folder static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
} else {
  app.get('/', (req, res) => {
    res.status(200).json('Welcome to Support desk')
  });
}


app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));