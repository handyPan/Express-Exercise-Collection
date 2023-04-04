import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// all routes in here are starting with /users

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', getUser);

// to update totally, use POST, to change only some property, use PATCH
router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;