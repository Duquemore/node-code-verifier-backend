// Basic import
import express, { Express, Request, Response } from 'express';

// Environment Variables
import dotenv from 'dotenv';

// Security
import cors from 'cors';
import helmet from 'helmet';

// TODO HTTPS

// Root Router
import rootRouter from '../routes';

// Create Express Server
const server: Express = express();
// const port: number | string = process.env.PORT || 8000;

// Define SERVER that use '/api' and use rootRouter from 'index.ts' in routes
// http://localhost:8000/api/...
server.use('/api', rootRouter);

// TODO Mongoose Connection

// Security config
server.use(helmet());
server.use(cors());

// Content Type Config
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));

// Redirection Config
// http://localhost:8000/ redirect to http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
	res.redirect('/api');
});

export default server;
