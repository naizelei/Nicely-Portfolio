import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['frontend', 'backend', 'database', 'devops', 'design', 'other'],
  },
  proficiency: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  icon: {
    type: String,
  },
  iconUrl: {
    type: String, // To store URL for real icons
  },
  color: {
    type: String,
    default: '#3B82F6',
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema); 