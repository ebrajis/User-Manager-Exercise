const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    repeatPassword: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    isEditOn: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
