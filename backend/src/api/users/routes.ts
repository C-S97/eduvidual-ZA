import { Server } from '@hapi/hapi';
import { Connection } from 'mongoose';
import UserController from "./user-controller";

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

    // TODO: User info Route
    // server.route({
    //     method: 'GET',
    //     path: '/user/info',
    //     handler: (req, h) => userController.createUser(req, h)
    // });
}