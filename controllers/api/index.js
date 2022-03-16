const router = require('express').Router();
const userRoutes = require('./userRoutes');
const myMatchRoutes = require ('./myMatchRoutes')

router.use('/users', userRoutes);
router.user('/mymatches', myMatchRoutes)

module.exports = router;
