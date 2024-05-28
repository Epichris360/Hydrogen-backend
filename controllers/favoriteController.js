const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');

// Get all favorites
router.get('/favorites', async (req, res) => {
  try {
    const ID = req.query.id
    if(ID) {
        const favorites = await Favorite.find({ productId: ID });
        const isFavorite = favorites.length > 0
        return res.json({ isFavorite });
    }
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new favorite
router.post('/favorites', async (req, res) => {
  try {
    const ID = req.query.id
    if(!ID) {
        return res.status(404).json({ error: 'Product id not provided' })
    }

    const favorite = new Favorite({
        productId: ID,
        status: true
    })

    const savedFavorite = await favorite.save()
    res.json(savedFavorite);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a favorite
router.delete('/favorites', async (req, res) => {
  try {
    const ID = req.query.id;
    if(!ID) {
        return res.status(404).json({ error: 'Product id not provided' })
    }

    await Favorite.deleteOne({ productId: ID })
    res.json({ deleted: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
