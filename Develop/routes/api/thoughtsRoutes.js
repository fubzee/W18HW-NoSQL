const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/')
.get(getThoughts)
.post(createThought);

router.route('/:thoughtId/reaction/:reactionId')
.delete(deleteReaction);

router.route('/:thoughtId/reaction')
.post(createReaction)


// /api/thougts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);



module.exports = router;
