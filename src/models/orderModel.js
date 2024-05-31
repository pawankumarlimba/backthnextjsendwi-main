import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  line1: {
    type: String,
    required: [true, 'Please provide address line 1'],
  },
  line2: {
    type: String,
  },
  tehsil: {
    type: String,
    required: [true, 'Please provide tehsil'],
  },
  district: {
    type: String,
    required: [true, 'Please provide district'],
  },
  state: {
    type: String,
    required: [true, 'Please provide state'],
  },
  zip: {
    type: Number,
    required: [true, 'Please provide zip code'],
  },
});

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'Please provide user name'],
  },
  design: {
    type: String,
    required: [true, 'Please provide design name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  address: {
    type: addressSchema,
    required: [true, 'Please provide address'],
  },
  number: {
    type: Number,
    required: [true, 'Please provide phone number'],
  },
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
