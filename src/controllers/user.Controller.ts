import { Request, Response } from 'express';
import User from '../models/User.model';
import Logger from '../library/Logger';

/**
 * Create a new user
 * @route POST /user
 */
export const newUser = async (req: Request, res: Response): Promise<void> => {
    let existingUser = await User.findOne({ name: req.body.name });

    if (existingUser) {
        res.status(200).json({ status: 'success', data: { message: 'User already exists!!', existingUser } });
        return;
    }
    let name = req.body.name;

    let user = new User({
        name: name.toLowerCase(),
        age: req.body.age
    });

    await user.save();

    res.status(201).json({ status: 'success', data: 'New user has been added.' });
};

/**
 * Get one user
 * @route GET /user/:<username>
 */
export const findUser = async (req: Request, res: Response): Promise<void> => {
    let user = await User.findOne({ name: req.params.username });
    if (!user) {
        Logger.warning('User not found!!!');
        res.status(200).json({ status: 'failed', message: 'User not found!!' });
        return;
    }

    res.status(200).json({ status: 'success', data: user });
};

/**
 * Get all users
 * @route GET /users
 */
export const findAllUsers = async (req: Request, res: Response): Promise<void> => {
    let allUsers = await User.find({});

    res.status(200).json({ status: 'success', data: allUsers });
};

/**
 * Update a user field
 * @route PUT /user
 */
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    let user = await User.findOneAndUpdate(
        { name: req.body.name.toLowerCase() },
        {
            [req.body.field]: typeof req.body.value === 'string' ? req.body.value.toLowerCase() : req.body.value
        }
    );

    if (!user) {
        Logger.warning('User does not exist!!!');
        res.status(200).json({ status: 'failed', data: 'User does not exist!!!' });
        return;
    }

    res.status(200).json({ status: 'success', data: { message: 'Updated user.', user } });
};

/**
 * Delete a user
 * @route DELETE /user/:<username>
 */
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    let deletedUser = await User.findOneAndDelete({ name: req.params.username.toLowerCase() });

    if (deletedUser === null) {
        Logger.warning('User does not exist!!!');
        res.status(200).json({ status: 'failed', data: 'User does not exist!!!' });
        return;
    }

    res.status(200).json({ status: 'success', data: `${req.params.username} has been removed!!!` });
};
