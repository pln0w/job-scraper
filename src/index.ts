import Server from './server';
import * as bodyParser from 'body-parser';
import LoggerMiddleware from './middlewares/loggerMiddleware';
import SearchController from './controllers/searchController';

const server = new Server({
    port: 3000, 
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        LoggerMiddleware,
    ], 
    controllers: [
        new SearchController(),
    ]
});

server.listen();