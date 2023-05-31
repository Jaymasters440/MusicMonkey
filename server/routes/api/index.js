const router = require('express').Router();
const genreRoutes = require('./-routes');
const somethingelseRoutes = require('./-routes.js');

router.use('/something', somethingRoutes);
router.use('/somethingelse', somethingelseRoutes);

module.exports = router;
