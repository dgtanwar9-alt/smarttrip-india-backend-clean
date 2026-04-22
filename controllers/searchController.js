import asyncHandler from '../utils/asyncHandler.js';
import Hotel from '../models/Hotel.js';
import Restaurant from '../models/Restaurant.js';
import Place from '../models/Place.js';
import Package from '../models/Package.js';

// @desc    Search destinations, hotels, restaurants, places
// @route   GET /api/search?q=query
// @access  Public
export const searchAll = asyncHandler(async (req, res) => {
    const query = req.query.q;

    if (!query) {
        res.status(400);
        throw new Error('Please provide a search query');
    }

    const regex = new RegExp(query, 'i');

    const [hotels, restaurants, places, packages] = await Promise.all([
        Hotel.find({ $or: [{ name: regex }, { location: regex }] }),
        Restaurant.find({ $or: [{ name: regex }, { location: regex }] }),
        Place.find({ $or: [{ name: regex }, { location: regex }] }),
        Package.find({ $or: [{ title: regex }, { destination: regex }] })
    ]);

    res.json({
        success: true,
        data: {
            hotels,
            restaurants,
            places,
            packages
        }
    });
});
