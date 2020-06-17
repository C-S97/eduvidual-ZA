import { Connection } from "mongoose";
import { Request, ResponseToolkit } from "@hapi/hapi";
import User from "../../models/User";

export default class UserController {
    private database: Connection;

    constructor(database: Connection) {
        this.database = database;
    }

    public createUser = async (request: Request, h: ResponseToolkit) => {

        console.log(request.payload);
        const payload: any = request.payload;
        const username: string | null = payload.username ? payload.username : null;
        const firstname: string | null = payload.firstname ? payload.firstname : null;
        const lastname: string | null = payload.lastname ? payload.lastname : null;
        const email: string | null = payload.email ? payload.email : null;
        const password: string | null = payload.password ? payload.password : null;

        if (username != null && firstname != null && lastname != null && email != null && password != null) {
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
            console.log(username);
            return ({ status: 404 })
        }
    }
}