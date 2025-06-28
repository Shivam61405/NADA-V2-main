import mongoose from "mongoose";

export const labSchema = new mongoose.Schema({
  labId: {
    type: String,
    required: true,
    unique: true,
  },
  labName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Lab = mongoose.model('Lab', labSchema);


export default Lab;