import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'please provide username'],
  },
  email: {
    type: String,
    required: [true, 'please provide email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const Admin = mongoose.models.admin || mongoose.model('admin', adminSchema);

export default Admin;
