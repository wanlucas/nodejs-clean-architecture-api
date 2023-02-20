import { FastifyRequest, FastifyReply } from 'fastify';
import { Request, Response } from '../../application/interfaces/http';
import ResponseHandler from '../default/ResponseHandler';

export default class ExpressAdapter {
  static create(controller: Function) {
    const handler = new ResponseHandler();

    return async (request: FastifyRequest, reply: FastifyReply) => {
      const { body, params, query } = request;
      const req: Request = { body, params, query };  
      const { status, payload }: Response = await controller(req, handler);

      return reply.code(status).send(payload);
    };
  }
}