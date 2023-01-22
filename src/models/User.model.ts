import mongoose, { Document, Schema, model } from 'mongoose';

export interface UserDocument extends Document {
    name: string;
    age: number;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

const User = model<UserDocument>('User', UserSchema);

export default User;
