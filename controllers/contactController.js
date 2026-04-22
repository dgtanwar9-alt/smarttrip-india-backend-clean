import asyncHandler from '../utils/asyncHandler.js';
import Contact from '../models/Contact.js';

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
export const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
        name,
        email,
        subject,
        message,
    });

    if (contact) {
        res.status(201).json({
            success: true,
            data: contact,
        });
    } else {
        res.status(400);
        throw new Error('Invalid contact data');
    }
});

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private/Admin
export const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.status(200).json({
        success: true,
        count: contacts.length,
        data: contacts,
    });
});
