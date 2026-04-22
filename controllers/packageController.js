import asyncHandler from '../utils/asyncHandler.js';
import Package from '../models/Package.js';

// @desc    Get all packages
// @route   GET /api/packages
// @access  Public
export const getPackages = asyncHandler(async (req, res) => {
    const packages = await Package.find({});
    res.status(200).json({
        success: true,
        count: packages.length,
        data: packages,
    });
});

// @desc    Get single package
// @route   GET /api/packages/:id
// @access  Public
export const getPackageById = asyncHandler(async (req, res) => {
    const pkg = await Package.findById(req.params.id);

    if (pkg) {
        res.status(200).json({
            success: true,
            data: pkg,
        });
    } else {
        res.status(404);
        throw new Error('Package not found');
    }
});

// @desc    Create a package
// @route   POST /api/packages
// @access  Private/Admin
export const createPackage = asyncHandler(async (req, res) => {
    const pkg = new Package(req.body);
    const createdPackage = await pkg.save();
    res.status(201).json({
        success: true,
        data: createdPackage,
    });
});

// @desc    Update a package
// @route   PUT /api/packages/:id
// @access  Private/Admin
export const updatePackage = asyncHandler(async (req, res) => {
    const pkg = await Package.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (pkg) {
        res.status(200).json({
            success: true,
            data: pkg,
        });
    } else {
        res.status(404);
        throw new Error('Package not found');
    }
});

// @desc    Delete a package
// @route   DELETE /api/packages/:id
// @access  Private/Admin
export const deletePackage = asyncHandler(async (req, res) => {
    const pkg = await Package.findByIdAndDelete(req.params.id);

    if (pkg) {
        res.status(200).json({
            success: true,
            message: 'Package removed',
        });
    } else {
        res.status(404);
        throw new Error('Package not found');
    }
});
