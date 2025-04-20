import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    type: {
      type: String,
      required: true,
      enum: ['transport', 'diet', 'energy'],
    },
    category: {
      type: String,
      required: true,
    },
    data: {
      distance: Number,
      fuelType: String,
      quantity: Number,
      unit: String,
    },
    carbonFootprint: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    location: {
      latitude: Number,
      longitude: Number,
    },
    notes: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Activity', activitySchema); 