const router = require('express').Router();
const Result = require('../../models/Result');


router.post('/quiz', async (req, res) => {
    try {
      const myMatch = await Result.create({
          user_id: req.body.user_name,
        user_answers: req.body.user_answers});
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(myMatch);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });