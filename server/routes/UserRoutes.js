const express = require('express');
const UserModel = require('../models/user');
const router = express.Router();

//get new user
router.post('/newuser', async (req, res) => {
  const gotNewUserData = req.body;
  console.log(' gotNewUserData', gotNewUserData);
  const newUser = new UserModel(gotNewUserData);
  try {
    const creatingNewUserResult = await newUser.save();
    res.json(creatingNewUserResult);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete user
router.delete('/delete/:id', async (req, res) => {
  const idOfItemToDelete = req.params.userId;
  try {
    const deleteResult = await UserModel.findByIdAndDelete(idOfItemToDelete);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json();
  }
});

//get all users
router.get('/allusers', async (req, res) => {
  try {
    const allUsersFromDb = await UserModel.find({});
    res.json(allUsersFromDb);
  } catch (error) {
    res.status(500).json();
  }
});

module.exports = router;
