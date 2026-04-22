import express from 'express';
const router = express.Router();

// @desc    Check server health
// @route   GET /api/health
// @access  Public
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

export default router;
