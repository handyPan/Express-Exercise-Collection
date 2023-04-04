import express from 'express';
import bodyParser from 'body-parser';

// const express = require('express');

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

// routes
app.get('/', (req, res) => res.send('Hello, express'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));




