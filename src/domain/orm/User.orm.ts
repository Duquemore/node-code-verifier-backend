import { userEntity } from '../entities/User.entity';
import { LogSuccess, LogError } from '@/utils/logger';

// Crud requests
/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
	try {
		let userModel = userEntity();

		// Search all users
		return await userModel.find({ isDelete: false });
	} catch (error) {
		LogError(`[ORM ERROR]: Getting all Users: ${error}`);
	}
};

// TODO Get user by id, Get user by email, delete user by id, create new user, update user by id
