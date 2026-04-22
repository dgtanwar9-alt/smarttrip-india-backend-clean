import express from 'express';
import { body } from 'express-validator';
import { subscribeNewsletter, getSubscribers } from '../controllers/newsletterController.js';
import { validateRequest } from '../middleware/validationMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(
        [
            body('email', 'Please include a valid email').isEmail(),
        ],
        validateRequest,
        subscribeNewsletter
    )
    .get(protect, getSubscribers);

export default router;
