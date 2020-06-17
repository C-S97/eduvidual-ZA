import { Document, model, Schema } from 'mongoose';

interface IUser extends Document {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export default model<IUser>('User', UserSchema);