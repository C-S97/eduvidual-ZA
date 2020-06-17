import { Document, model, Schema } from 'mongoose';
import * as Joi from "@hapi/joi";

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

// TODO: Make Regex that checks a-z, A-Z, 0-9 with special characters
export const userValidateSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .max(50)
        .required(),
    firstname: Joi.string()
        .regex(/[a-zA-Z]/)
        .required(),
    lastname: Joi.string()
        .regex(/[a-zA-Z]/)
        .required(),
    email: Joi.string()
        .email({ tlds: { allow: true } })
        .required(),
    password: Joi.string()
        .required()
})

export default model<IUser>('User', UserSchema);