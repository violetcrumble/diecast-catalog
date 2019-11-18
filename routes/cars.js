const express = require('express');
const router = express.Router();

// @route   GET api/cars
// @desc    Get all users diecast cars
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all cars');
});

// @route   POST api/cars
// @desc    Add new diecast cars
// @access  Private
router.post('/', (req, res) => {
    res.send('Add car');
});

// @route   PUT api/cars/:id
// @desc    Add new diecast cars
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update car');
});

// @route   DELETE api/cars/:id
// @desc    Add new diecast cars
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete car');
});

module.exports = router;