// filepath: /c:/Pokegit/backend/src/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pokemonRoutes = require('./routes/pokemon');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/pokemon', pokemonRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});