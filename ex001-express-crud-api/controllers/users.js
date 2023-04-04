import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    console.log(users);
    res.send(`User with the name ${user.firstName} added to the database!`);
}

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    console.log(users);
    res.send(foundUser);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const userToBeUpdated = users.find((user) => user.id === id);
    const { firstName,  lastName, age } = req.body;
    if (firstName) userToBeUpdated.firstName = firstName;
    if (lastName) userToBeUpdated.lastName = lastName;
    if (age) userToBeUpdated.age = age;
    console.log(users);
    res.send(`User with the id ${id} has been updated.`);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    console.log(users);
    res.send(`User with the id ${id} deleted from the database!`);
}