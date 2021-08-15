const express = require('express');
const router = express.Router();

const Weight = require('../../models/Weight');

// @route   POST /api/weights
// @desc    add weight
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newWeight = new Weight({
      date: req.body.date,
      text: req.body.text,
    });

    newWeight.save().then(weight => res.json(weight));
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/weights
// @desc    get all daily weights
// @access  Public
router.get('/', async (req, res) => {
  try {
    const dailyWeights = await Weight.find();

    res.json(dailyWeights);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// @route   DELETE /api/weights
// @desc    delete weight
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const weight = await Weight.findById(req.params.id);

    weight.remove().then(() => res.json({ deleted: true }));
  } catch (err) {
    console.log(err);
    res.status(404).send('Server error');
  }
});

module.exports = router;
