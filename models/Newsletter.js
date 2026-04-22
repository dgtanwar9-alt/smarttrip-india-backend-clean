import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email',
            ],
        },
        status: {
            type: String,
            enum: ['Subscribed', 'Unsubscribed'],
            default: 'Subscribed',
        },
    },
    {
        timestamps: true,
    }
);

const Newsletter = mongoose.model('Newsletter', newsletterSchema);
export default Newsletter;
