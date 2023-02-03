import { Request, Response } from 'express';
import { IRequest, IResponse } from '../../controller/http';

export default class ExpressAdapter {
  static create(controller: Function) {
    return async (req: Request, res: Response) => {
      const { body, params, query } = req;
      const request: IRequest = { body, params, query };  
      const { status, payload }: IResponse = await controller(request);

      return res.status(status).json(payload);
    };
  }
}