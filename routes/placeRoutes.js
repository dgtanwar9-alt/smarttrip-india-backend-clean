import express from 'express';
import {
    getPlaces,
    getPlaceById,
    createPlace,
    updatePlace,
    deletePlace,
} from '../controllers/placeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getPlaces)
    .post(protect, createPlace);

router.route('/:id')
    .get(getPlaceById)
    .put(protect, updatePlace)
    .delete(protect, deletePlace);

export default router;
