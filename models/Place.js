import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a place name'],
        },
        location: {
            type: String,
            required: [true, 'Please add a location'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        image: {
            type: String,
            required: [true, 'Please add an image URL'],
        },
        isGem: {
            type: Boolean,
            default: false, // true means it's a "hidden gem"
        },
    },
    {
        timestamps: true,
    }
);

const Place = mongoose.model('Place', placeSchema);
export default Place;
