const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');

router.use('/Thought', thoughtsRoutes);
router.use('/User', userRoutes);

module.exports = router;
