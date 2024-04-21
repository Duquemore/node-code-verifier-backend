import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';
// Environment Variables
import dotenv from 'dotenv';

// Configuration of .env file
dotenv.config();

const port: number | string = process.env.PORT || 8000;

// Execute Server and listen requests to Port
server.listen(port, () => LogSuccess(`[SERVER ON]: Running in: http://localhost:${port}/api`));

// Control SERVER ERROR
server.on('error', (error) => {
	LogError(`[SERVER ERROR]: ${error}`);
});
