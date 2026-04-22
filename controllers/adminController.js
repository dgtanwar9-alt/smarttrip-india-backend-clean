import asyncHandler from '../utils/asyncHandler.js';
import Admin from '../models/Admin.js';
import generateToken from '../utils/generateToken.js';
import Contact from '../models/Contact.js';
import Trip from '../models/Trip.js';
import Package from '../models/Package.js';
import Newsletter from '../models/Newsletter.js';

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
export const authAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
        res.json({
            success: true,
            data: {
                _id: admin._id,
                username: admin.username,
                token: generateToken(admin._id),
            }
        });
    } else {
        res.status(401);
        throw new Error('Invalid username or password');
    }
});

// @desc    Register a new admin (you might want to comment this out after creating the first admin)
// @route   POST /api/admin/register
// @access  Private/Admin
export const registerAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const adminExists = await Admin.findOne({ username });

    if (adminExists) {
        res.status(400);
        throw new Error('Admin already exists');
    }

    const admin = await Admin.create({
        username,
        password,
    });

    if (admin) {
        res.status(201).json({
            success: true,
            data: {
                _id: admin._id,
                username: admin.username,
                token: generateToken(admin._id),
            }
        });
    } else {
        res.status(400);
        throw new Error('Invalid admin data');
    }
});

// @desc    Get dashboard stats
// @route   GET /api/admin/dashboard
// @access  Private/Admin
export const getDashboardStats = asyncHandler(async (req, res) => {
    const contactsCount = await Contact.countDocuments();
    const tripsCount = await Trip.countDocuments();
    const packagesCount = await Package.countDocuments();
    const subscribersCount = await Newsletter.countDocuments();

    res.json({
        success: true,
        data: {
            contactsCount,
            tripsCount,
            packagesCount,
            subscribersCount,
        }
    });
});
