import * as Hapi from '@hapi/hapi';
import * as mongoose from 'mongoose';

const init = async () => {
    await mongoose.connect('mongodb://localhost/eduvidual', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    const server = Hapi.server({
        port: 2020,
        host: 'localhost'
    });

    await server.start();
    console.log("server is running on %s", server.info.uri);
    console.log("The Databse and Server are ready to use.");

};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();