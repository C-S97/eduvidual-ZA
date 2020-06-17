import { Connection } from "mongoose";
import { Request, ResponseToolkit } from "@hapi/hapi";
import User, { userValidateSchema } from "../../models/User";
import { IRegisterRequest } from "../../interfaces/request";

export default class UserController {
    private database: Connection;

    constructor(database: Connection) {
        this.database = database;
    }

    public userInfo = async (request: Request, h: ResponseToolkit) => {


    }

    public createUser = async (request: IRegisterRequest, h: ResponseToolkit) => {

        const payload: any = request.payload;

        const username: string = payload.username;
        const firstname: string = payload.firstname;
        const lastname: string = payload.lastname;
        const email: string = payload.email;
        const password: string = payload.password;

        const validatedUser = userValidateSchema.validate({
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })

        if (validatedUser.error == null) {
            const user = new User({
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            });

            await user.save((err, user) => {
                if (err != null) {
                    return ({ status: 404, message: "An error occurred while creating the User" });
                }
            });

            return ({ status: 200, message: "User was Successfully created" })
        } else {
            return ({ error: validatedUser.error.details });
        }
    }
}