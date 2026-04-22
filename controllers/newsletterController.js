import asyncHandler from '../utils/asyncHandler.js';
import Newsletter from '../models/Newsletter.js';

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
// @access  Public
export const subscribeNewsletter = asyncHandler(async (req, res) => {
    const { email } = req.body;

    // Check if already subscribed
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
        res.status(400);
        throw new Error('Email is already subscribed');
    }

    const subscriber = await Newsletter.create({ email });

    res.status(201).json({
        success: true,
        data: subscriber,
    });
});

// @desc    Get all subscribers
// @route   GET /api/newsletter
// @access  Private/Admin
export const getSubscribers = asyncHandler(async (req, res) => {
    const subscribers = await Newsletter.find({}).sort({ createdAt: -1 });
    res.status(200).json({
        success: true,
        count: subscribers.length,
        data: subscribers,
    });
});
