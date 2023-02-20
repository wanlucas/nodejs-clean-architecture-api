import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { Request, Response } from '../../application/interfaces/http';
import ResponseHandler from '../default/ResponseHandler';

export default class ExpressAdapter {
  static create(controller: Function) {
    const handler = new ResponseHandler();

    return async (req: ExpressRequest, res: ExpressResponse) => {
      const { body, params, query } = req;
      const request: Request = { body, params, query };  
      const { status, payload }: Response = await controller(request, handler);

      return res.status(status).json(payload);
    };
  }
}