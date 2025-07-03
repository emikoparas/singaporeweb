import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.post('/', async (req, res) => { // Adjusted route path
  const { name, email, feedback } = req.body;
  try {
    const newFeedback = new User({ name, email, Feedback: feedback });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ message: 'Failed to submit feedback. Please try again later.' });
  }
});

export default router;