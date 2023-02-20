import express from 'express';
import SkillControllerFactory from '../../../application/factories/SkillFactory';
import ExpressAdapter from '../ExpressAdapter';

export default class SkillRouter {
  static create() {
    const router = express.Router();
    const skillController = SkillControllerFactory.create();

    router.get('/', ExpressAdapter.create(skillController.getSkills));
    router.post('/', ExpressAdapter.create(skillController.createSkill));

    return router;
  }
}