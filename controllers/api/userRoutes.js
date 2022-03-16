const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt')

// GET all Users
router.get('/', async (req, res) => {
  // Get all Users from the user table
  try {  
      const userData  = await User.findAll();

    res.status(200).json(userData);
} catch (err) {
    res.status(500).json(err);
  }

  });


  // Find Users from Primary Key
  router.get('/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id!' });
            return;
        }

        res.status(200).json(userData)

    } catch (err) {
        res.status(500).json(err)
    }

  });

  // Creating New User


router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
        user_name: req.body.user_name,
        sex: req.body.sex,
        age: req.body.age,
        password: req.body.password
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { user_name: req.body.user_name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;



