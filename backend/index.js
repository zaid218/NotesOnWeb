const express = require('express');
const path = require('path');
const connectToMongo = require('./db');

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

connectToMongo(); // Connect to MongoDB using the updated URI

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`);
});
