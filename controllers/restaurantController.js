import asyncHandler from '../utils/asyncHandler.js';
import Restaurant from '../models/Restaurant.js';

// @desc    Get all restaurants
// @route   GET /api/restaurants
// @access  Public
export const getRestaurants = asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find({});
    res.status(200).json({
        success: true,
        count: restaurants.length,
        data: restaurants,
    });
});

// @desc    Get single restaurant
// @route   GET /api/restaurants/:id
// @access  Public
export const getRestaurantById = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
        res.status(200).json({
            success: true,
            data: restaurant,
        });
    } else {
        res.status(404);
        throw new Error('Restaurant not found');
    }
});

// @desc    Create a restaurant
// @route   POST /api/restaurants
// @access  Private/Admin
export const createRestaurant = asyncHandler(async (req, res) => {
    const restaurant = new Restaurant(req.body);
    const createdRestaurant = await restaurant.save();
    res.status(201).json({
        success: true,
        data: createdRestaurant,
    });
});

// @desc    Update a restaurant
// @route   PUT /api/restaurants/:id
// @access  Private/Admin
export const updateRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (restaurant) {
        res.status(200).json({
            success: true,
            data: restaurant,
        });
    } else {
        res.status(404);
        throw new Error('Restaurant not found');
    }
});

// @desc    Delete a restaurant
// @route   DELETE /api/restaurants/:id
// @access  Private/Admin
export const deleteRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);

    if (restaurant) {
        res.status(200).json({
            success: true,
            message: 'Restaurant removed',
        });
    } else {
        res.status(404);
        throw new Error('Restaurant not found');
    }
});
