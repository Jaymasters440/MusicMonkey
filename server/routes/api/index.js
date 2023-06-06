const router = require('express').Router();
const genreRoutes = require('./routes');
const somethingelseRoutes = require('./routes.js');

router.use('/genre', genreRoutes);
router.use('/artist', artistRoutes);

module.exports = router;
