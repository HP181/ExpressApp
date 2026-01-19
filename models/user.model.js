import { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "user Name is required"],
        trim: true,
        Minlength: [2, "Name must be at least 3 characters long"],
        Maxlength: [50, "Name must not exceed 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        Minlength: [6, "Password must be at least 6 characters long"]
    },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
