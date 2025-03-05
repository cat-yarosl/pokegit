// filepath: /c:/Pokegit/backend/src/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pokemonRoutes = require('./routes/pokemon');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/pokemon', pokemonRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});