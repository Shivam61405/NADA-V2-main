
import express from 'express';
import Athlete from '../../models/athletes.js'; 
const router = express.Router();


router.get('/athletes', async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.status(200).json(athletes);
  } catch (error) {
    console.error('Error fetching athletes:', error);
    res.status(500).json({ error: 'Failed to fetch athlete data' });
  }
});

export default router;