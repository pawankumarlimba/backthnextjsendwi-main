import mongoose from 'mongoose';

const designSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
    unique: true,
  },
  url: {
    type: String,
    required: [true, 'please provide name'],
    
  },
  category: {
    type: String,
    required: [true, 'please provide category'],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'please provide price'],
  },
});

const Design = mongoose.models.design || mongoose.model('design', designSchema);

export default Design;
