import express from 'express';
import {
    getPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage,
} from '../controllers/packageController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getPackages)
    .post(protect, createPackage);

router.route('/:id')
    .get(getPackageById)
    .put(protect, updatePackage)
    .delete(protect, deletePackage);

export default router;
