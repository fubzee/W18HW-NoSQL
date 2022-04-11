const {User, Thought } = require('../models');
const { validate } = require('../models/Thought');

module.exports = {
  // Get all Users
  getUsers(req, res) {
    User.find()
      .then(async (user) => {
        const userObj = {
          user,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err.message);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
            user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err.message);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err.message));
  },
  // Delete a user 
  deleteUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .then((user) =>     
      Thought.deleteMany(
      { userName: user.username },
    ))
    .then((thought) =>
    User.findOneAndRemove({ _id: req.params.userId }))
    .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found'})
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err.message);
      })
  },

  //  Update a user

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, {runValidators: true})
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json({ message: 'User successfully updated' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add a friend to the user
  addFriend(req, res) {
    console.log('You are adding an friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body.friend } },
      { new: true }
      ) 
      .then((user) => {
        !user
          ? res
              .status(404)
              .json({ message: 'No User found with that ID :(' })
          : res.json(user)
      })
      .catch((err) => res.status(500).json(err.message));
  },
  // Remove friend from a user
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.body.friend } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No User found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err.message));
  },
};
