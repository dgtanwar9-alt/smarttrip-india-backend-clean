import express from 'express';
import {
    getHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel,
} from '../controllers/hotelController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getHotels)
    .post(protect, createHotel);

router.route('/:id')
    .get(getHotelById)
    .put(protect, updateHotel)
    .delete(protect, deleteHotel);

export default router;
