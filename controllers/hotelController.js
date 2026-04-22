import asyncHandler from '../utils/asyncHandler.js';
import Hotel from '../models/Hotel.js';

// @desc    Get all hotels
// @route   GET /api/hotels
// @access  Public
export const getHotels = asyncHandler(async (req, res) => {
    const hotels = await Hotel.find({});
    res.status(200).json({
        success: true,
        count: hotels.length,
        data: hotels,
    });
});

// @desc    Get single hotel
// @route   GET /api/hotels/:id
// @access  Public
export const getHotelById = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);

    if (hotel) {
        res.status(200).json({
            success: true,
            data: hotel,
        });
    } else {
        res.status(404);
        throw new Error('Hotel not found');
    }
});

// @desc    Create a hotel
// @route   POST /api/hotels
// @access  Private/Admin
export const createHotel = asyncHandler(async (req, res) => {
    const hotel = new Hotel(req.body);
    const createdHotel = await hotel.save();
    res.status(201).json({
        success: true,
        data: createdHotel,
    });
});

// @desc    Update a hotel
// @route   PUT /api/hotels/:id
// @access  Private/Admin
export const updateHotel = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (hotel) {
        res.status(200).json({
            success: true,
            data: hotel,
        });
    } else {
        res.status(404);
        throw new Error('Hotel not found');
    }
});

// @desc    Delete a hotel
// @route   DELETE /api/hotels/:id
// @access  Private/Admin
export const deleteHotel = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);

    if (hotel) {
        res.status(200).json({
            success: true,
            message: 'Hotel removed',
        });
    } else {
        res.status(404);
        throw new Error('Hotel not found');
    }
});
