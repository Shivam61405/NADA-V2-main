import  mongoose from 'mongoose';

const athleteSchema = new mongoose.Schema({
    athlete_id: {
        type: Number,
        required: true,
        unique: true, // Ensure athlete_id is unique
      },
      athlete_name: {
        type: String,
        required: true,
      },
      dob: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // You can restrict gender values if needed
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
      sport: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now, // Automatically set the date when the document is created
      },
      email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
      },
      description: {
        type: String,
        required: false, // Not required
      },
      mobile: {
        type: String,
        required: true,
      },
      achievement: {
        type: String,
        required: false, // Not required
      }
});

const Athlete = mongoose.model('athletes', athleteSchema);
export default Athlete;