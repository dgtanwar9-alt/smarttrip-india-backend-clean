import express from 'express';
import {
    getRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
} from '../controllers/restaurantController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getRestaurants)
    .post(protect, createRestaurant);

router.route('/:id')
    .get(getRestaurantById)
    .put(protect, updateRestaurant)
    .delete(protect, deleteRestaurant);

export default router;
