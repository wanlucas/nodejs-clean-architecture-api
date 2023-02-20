import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import SkillControllerFactory from '../../../application/factories/SkillFactory';
import FastifyAdapter from '../FastifyAdapter';

export default class SkillRouter {
  static create() {
    const skillController = SkillControllerFactory.create();

    const router = async (fastify: FastifyInstance, _options: FastifyPluginOptions) => {
      fastify.get('/', FastifyAdapter.create(skillController.getSkills));
      fastify.post('/', FastifyAdapter.create(skillController.createSkill));
    }

    return router;
  }
}