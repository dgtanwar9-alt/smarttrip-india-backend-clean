import asyncHandler from '../utils/asyncHandler.js';
import Place from '../models/Place.js';

// @desc    Get all places (can filter by isGem)
// @route   GET /api/places
// @access  Public
export const getPlaces = asyncHandler(async (req, res) => {
    const isGem = req.query.isGem;
    let query = {};
    
    if (isGem !== undefined) {
        query.isGem = isGem === 'true';
    }

    const places = await Place.find(query);
    res.status(200).json({
        success: true,
        count: places.length,
        data: places,
    });
});

// @desc    Get single place
// @route   GET /api/places/:id
// @access  Public
export const getPlaceById = asyncHandler(async (req, res) => {
    const place = await Place.findById(req.params.id);

    if (place) {
        res.status(200).json({
            success: true,
            data: place,
        });
    } else {
        res.status(404);
        throw new Error('Place not found');
    }
});

// @desc    Create a place
// @route   POST /api/places
// @access  Private/Admin
export const createPlace = asyncHandler(async (req, res) => {
    const place = new Place(req.body);
    const createdPlace = await place.save();
    res.status(201).json({
        success: true,
        data: createdPlace,
    });
});

// @desc    Update a place
// @route   PUT /api/places/:id
// @access  Private/Admin
export const updatePlace = asyncHandler(async (req, res) => {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (place) {
        res.status(200).json({
            success: true,
            data: place,
        });
    } else {
        res.status(404);
        throw new Error('Place not found');
    }
});

// @desc    Delete a place
// @route   DELETE /api/places/:id
// @access  Private/Admin
export const deletePlace = asyncHandler(async (req, res) => {
    const place = await Place.findByIdAndDelete(req.params.id);

    if (place) {
        res.status(200).json({
            success: true,
            message: 'Place removed',
        });
    } else {
        res.status(404);
        throw new Error('Place not found');
    }
});
