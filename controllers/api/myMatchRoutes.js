const router = require('express').Router();
const Result = require('../../models/Result');

router.post('/quiz', async (req, res) => {
  console.log(req.body.user_answers);
  try {
    // loop over user_answer array
    const myMatch = await Result.create({
      id: req.session.user_id,
      user_answer_one: req.body.user_answers[0],
      user_answer_two: req.body.user_answers[1],
      user_answer_three: req.body.user_answers[2],
      user_answer_four: req.body.user_answers[3],
      user_answer_five: req.body.user_answers[4],
    });

    req.session.save(() => {
      res.status(200).json(myMatch);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
