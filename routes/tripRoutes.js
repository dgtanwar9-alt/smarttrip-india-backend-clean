import express from 'express';
import { body } from 'express-validator';
import { createTrip, getTrips } from '../controllers/tripController.js';
import { validateRequest } from '../middleware/validationMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(
        [
            body('destination', 'Destination is required').notEmpty(),
            body('startDate', 'Start date is required').isISO8601(),
            body('endDate', 'End date is required').isISO8601(),
            body('budget', 'Budget is required (Budget, Moderate, Luxury)').isIn(['Budget', 'Moderate', 'Luxury']),
            body('contactDetails.name', 'Contact name is required').notEmpty(),
            body('contactDetails.email', 'Contact email is required').isEmail(),
            body('contactDetails.phone', 'Contact phone is required').notEmpty(),
        ],
        validateRequest,
        createTrip
    )
    .get(protect, getTrips);

export default router;
