import e from 'express';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const SubscriptionSchema = new Schema({
    name: {
        type: String,
        required: [true, "Subscription Name is required"],
        trim: true,
        minLength: [2, "Name must be at least 3 characters long"],
        maxLength: [100, "Name must not exceed 100 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"]
    },
    currency: {
        type: String,
        required: [true, "Currency is required"],
        enum: ['USD', 'EUR', 'GBP'],
        default: 'USD'
    },
    frequency: {
        type: String,
        required: [true, "Frequency is required"],
        enum: ['daily', 'weekly', 'monthly', 'yearly']
    },
    category: {
        type: String,
        trim: true,
        enum: ['sports', 'news', 'entertainment', 'lifestyle', 'technology', 'finance', 'politics', 'other'],
        required: [true, "Category is required"],
        maxLength: [50, "Category must not exceed 50 characters"]
    },
    paymentMethod: {
        type: String,
        required: [true, "Payment Method is required"],
        trim: true,
    },
    status : {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: [true, "Start Date is required"],
        validate: {
            validator: (value) => value <= new Date(),
            message: "start date must be in the past."
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function(value){ 
                return value > this.startDate;
             },
            message: "Renewal date must be after start date."
        }
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User ID is required"],
        index: true
    }
}, { timestamps: true });

SubscriptionSchema.pre('save', function(next) {
    if (!this.renewalDate) {
        const renewalPreiods = {
            'daily': 1,
            'weekly': 7,
            'monthly': 30,
            'yearly': 365
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPreiods[this.frequency]);
    }

    if(this.renewalDate <= new Date()){
        this.status = 'expired';
    }

    next();
});