import mongoose from 'mongoose';

interface UserDocument extends mongoose.Document {
	name: string;
	age: number;
	location: string;
	hobbies: string[];
}

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	location: { type: String, required: true },
	hobbies: {
		type: [String],
		required: true,
	},
});

const User = mongoose.model<UserDocument>('User', UserSchema);
