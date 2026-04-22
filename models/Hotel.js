import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a hotel name'],
        },
        location: {
            type: String,
            required: [true, 'Please add a location'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        pricePerNight: {
            type: Number,
            required: [true, 'Please add price per night'],
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        amenities: {
            type: [String],
            default: [],
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

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;
