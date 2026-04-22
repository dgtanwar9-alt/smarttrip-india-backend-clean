import asyncHandler from '../utils/asyncHandler.js';
import Trip from '../models/Trip.js';

// @desc    Create new trip plan
// @route   POST /api/trip
// @access  Public
export const createTrip = asyncHandler(async (req, res) => {
    const {
        destination,
        startDate,
        endDate,
        travelers,
        budget,
        contactDetails,
        specialRequirements,
    } = req.body;

    const trip = await Trip.create({
        destination,
        startDate,
        endDate,
        travelers,
        budget,
        contactDetails,
        specialRequirements,
    });

    if (trip) {
        res.status(201).json({
            success: true,
            data: trip,
        });
    } else {
        res.status(400);
        throw new Error('Invalid trip data');
    }
});

// @desc    Get all planned trips
// @route   GET /api/trip
// @access  Private/Admin
export const getTrips = asyncHandler(async (req, res) => {
    const trips = await Trip.find({}).sort({ createdAt: -1 });
    res.status(200).json({
        success: true,
        count: trips.length,
        data: trips,
    });
});
