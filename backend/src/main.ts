import * as Hapi from '@hapi/hapi';

const init = async () => {
    const server = Hapi.server({
        port: 2020,
        host: 'localhost'
    });

    await server.start();
    console.log("server is running on %s", server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();