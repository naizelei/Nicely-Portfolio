import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
  website: {
    type: String,
  },
  avatar: {
    type: String,
  },
  resume: {
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Profile || mongoose.model('Profile', profileSchema); 