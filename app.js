const express  = require('express');

const app = express();
require('dotenv').config();

const dbConnection = require('./config/dbConnection');
dbConnection();

//MiddleWare
app.use(express.static('./public'));
app.use(express.json());
const tasks = require('./routers/tasks');
app.use('/api/v1/tasks', tasks);

//Router

//Port
const port = 5000;
app.listen(port, console.log(`Server running in http://localhost:${port}/`));