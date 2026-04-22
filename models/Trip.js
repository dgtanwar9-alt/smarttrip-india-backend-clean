import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema(
    {
        destination: {
            type: String,
            required: [true, 'Please add a destination'],
        },
        startDate: {
            type: Date,
            required: [true, 'Please add a start date'],
        },
        endDate: {
            type: Date,
            required: [true, 'Please add an end date'],
        },
        travelers: {
            adults: { type: Number, default: 1 },
            children: { type: Number, default: 0 },
        },
        budget: {
            type: String,
            enum: ['Budget', 'Moderate', 'Luxury'],
            required: [true, 'Please specify a budget level'],
        },
        contactDetails: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
        },
        specialRequirements: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

const Trip = mongoose.model('Trip', tripSchema);
export default Trip;
