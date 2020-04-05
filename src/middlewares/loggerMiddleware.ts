import { Request, Response } from 'express'

const LoggerMiddleware = (req: Request, resp: Response, next: () => void) => {

    console.log('Request:', req.method, req.path);

    next();
}

export default LoggerMiddleware