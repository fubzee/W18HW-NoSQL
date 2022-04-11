const { Thought, User} = require('../models');


module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err.message));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts found with this ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err.message));
  },
  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
    .then((Thought) =>
      User.findOneAndUpdate(
      { username : req.body.userName },
      { $addToSet: { thoughts: Thought._id } },
      { new: true }
      )
    .then((User) => 
    !User
    ? res.status(404).json({ message: 'User not found'})
    : res.json(Thought))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err.message);
      }))
  },
  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts found with this ID' })
          :res.json({ message: 'Thoughts and Reactions deleted!' }))
      .catch((err) => res.status(500).json(err.message));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts found with this ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err.message));
  },

// Create a Reaction
  createReaction(req,res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
      ) 
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts found with this ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err.message));
  },

  deleteReaction(req,res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: {_id: req.params.reactionId } } },
      { new: true }
      ) 
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts found with this ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err.message));
}
};
