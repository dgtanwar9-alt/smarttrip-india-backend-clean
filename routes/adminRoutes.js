import express from 'express';
import { authAdmin, registerAdmin, getDashboardStats } from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authAdmin);
// To create the first admin, temporarily remove the protect middleware
router.post('/register', protect, registerAdmin); 
router.get('/dashboard', protect, getDashboardStats);

export default router;
