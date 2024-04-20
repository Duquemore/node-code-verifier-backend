import express, { Request, Response } from 'express';
import { HelloController } from '@/controller/HelloController';
import { LogInfo } from '@/utils/logger';

// Router from express
let helloRouter = express.Router();

helloRouter
	.route('/')
	// GET -> http://localhost:8000/api/hello?name=deba/
	.get(async (req: Request, res: Response) => {
		//Obtain a query param
		let name: any = req?.query.name;
		LogInfo(`Query Param: ${name}`);
		// Controller Instance to execute method
		const controller: HelloController = new HelloController();
		// Obtain response
		const response = await controller.getMessage(name);
		// Send to the Client
		return res.send(response);
	});

// Export the helloRouter
export default helloRouter;
