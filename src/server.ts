import express from 'express'
import { Application } from 'express'

class Server {

    private server: Application
    private port: number

    constructor(params: { port: number; middlewares: any; controllers: any; }) {
        this.server = express();
        this.port = params.port;

        this.middlewares(params.middlewares);
        this.routes(params.controllers);  
    }


    private middlewares(middlewares: { forEach: (arg0: (m: any) => void) => void; }) {
        middlewares.forEach(m => {
            this.server.use(m);
        })
    }

    private routes(controllers: { forEach: (arg0: (c: any) => void) => void; }) {
        controllers.forEach(c => {
            this.server.use('/', c.router);
        })
    }

    public listen() {
        this.server.listen(this.port, () => {
            console.log(`Server is listening on the http://localhost:${this.port}`);
        })
    }
}

export default Server