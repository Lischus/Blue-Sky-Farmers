const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const displayRoutes = require('./displayRoutes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', displayRoutes);


module.exports = router;