import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
    },
    carbonProfile: {
      diet: {
        type: String,
        enum: ['vegetarian', 'vegan', 'omnivore'],
        default: 'omnivore',
      },
      transportation: [String],
      homeEnergy: {
        type: String,
        enum: ['electric', 'gas', 'mixed'],
        default: 'mixed',
      },
      carbonGoal: {
        type: Number,
        default: 2000, // kg CO2 per year
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema); 