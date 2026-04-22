import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a restaurant name'],
        },
        location: {
            type: String,
            required: [true, 'Please add a location'],
        },
        cuisine: {
            type: String,
            required: [true, 'Please add cuisine type'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        image: {
            type: String,
            required: [true, 'Please add an image URL'],
        },
        featured: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
