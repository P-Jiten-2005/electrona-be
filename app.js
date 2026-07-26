import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import "./src/config/firebase.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Electrona Backend Running');
});

export default app;
