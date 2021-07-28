const express = require('express');
const UserModel = require('../models/user');
const router = express.Router();

//get new user
router.post('/api/user/new', async (req, res) => {
  const gotNewUserData = req.body;
  const newUser = new UserModel(gotNewUserData);
  try {
    const creatingNewUserResult = await newUser.save();
    res.json(creatingNewUserResult);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete user
router.delete('/api/user/delete/:userId', async (req, res) => {
  const idOfItemToDelete = req.params.userId;
  try {
    const deleteResult = await UserModel.findByIdAndDelete(idOfItemToDelete);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json(error);
  }
});
//update user
router.put('/api/user/update/:userId', async (req, res) => {
  const idOfItemToUpdate = req.params.userId;
  const updatedUser = req.body;
  try {
    const updateResultModel = await UserModel.findByIdAndUpdate(idOfItemToUpdate, updatedUser);
    res.json(updateResultModel);
  } catch (error) {
    res.status(500).json();
  }
});

//get all users
router.get('/api/user', async (req, res) => {
  try {
    const allUsersFromDb = await UserModel.find({});
    res.json(allUsersFromDb);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
