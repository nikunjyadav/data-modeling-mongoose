import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    default: 0,
    min: 0,
  },
  qualifications: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  worksInHospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
