import express from 'express';
import { body } from 'express-validator';
import { submitContactForm, getContacts } from '../controllers/contactController.js';
import { validateRequest } from '../middleware/validationMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(
        [
            body('name', 'Name is required').notEmpty(),
            body('email', 'Please include a valid email').isEmail(),
            body('subject', 'Subject is required').notEmpty(),
            body('message', 'Message is required').notEmpty(),
        ],
        validateRequest,
        submitContactForm
    )
    .get(protect, getContacts);

export default router;
