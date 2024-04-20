import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Configuration of .env file
dotenv.config();

// Create Express App
const app = express();
const port: number | string = process.env.PORT || 8000;

// Define the first Route of App

app.get('/', (req: Request, res: Response) => {
	//Send Hello World
	res.send('Welcome to APP Express + TS + Swagger + Mongoose');
});

// Execute App and listen requests to Port
app.listen(port, () => console.log(`Express server running at: http://localhost:${port}`));
