//Steg 1
import express from 'express';
import cors from 'cors'; // Import CORS middleware to allow or block requests from different origins (frontend to backend).
import dotenv from 'dotenv';

import whRoute from './routes/units.route.mjs';

dotenv.config(); //Ger tillgång till .envfilen

const PORT = process.env.PORT; // PORT 8008 hämtar data från 6020
const baseUrl = 'http://localhost:6020'; //Json

const app = express();

app.use(cors()); //Tillåter oss prata mellan front end och backend

app.use('/warhammer', whRoute);

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
