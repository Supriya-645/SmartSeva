import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    FirstName:
    {
        type: String,
        required: true
    },
    LastName:
    {
        type: String,
        required: false
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);
export default User;