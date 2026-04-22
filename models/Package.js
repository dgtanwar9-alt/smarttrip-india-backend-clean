import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a package title'],
        },
        destination: {
            type: String,
            required: [true, 'Please add a destination'],
        },
        duration: {
            type: String,
            required: [true, 'Please add a duration (e.g., 3 Days 2 Nights)'],
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        includes: {
            type: [String],
            default: [],
        },
        image: {
            type: String,
            required: [true, 'Please add an image URL'],
        },
    },
    {
        timestamps: true,
    }
);

const Package = mongoose.model('Package', packageSchema);
export default Package;
