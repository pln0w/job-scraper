import { Response, Request } from 'express';

interface IController {

    invoke(req: Request, res: Response): void;
}

export default IController;