import { Server } from '@hapi/hapi';
import { Connection } from 'mongoose';
import UserController from "./user-controller";
import { IRegisterRequest } from "../../interfaces/request";

export default (
    server: Server,
    database: Connection
) => {

    const userController = new UserController(database);
    server.bind(userController);


    server.route({
        method: 'POST',
        path: '/user/create',
        handler: (req, h) => userController.createUser(req, h)
    });
}