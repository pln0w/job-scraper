import IController from '../interfaces/controllerInterface';
import { Request, Response, Router } from 'express';

class SearchController implements IController {

    private router: Router = Router();
    private path: string = '/search';

    constructor() {
        this.router.get(this.path, this.invoke);
    }

    public invoke(req: Request, res: Response): void {
        res.json({response: 'result'});
    }

}

export default SearchController;