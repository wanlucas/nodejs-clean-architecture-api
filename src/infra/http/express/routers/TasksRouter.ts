import express from 'express';
import SkillController from '../../../../controller/SkillController';
import ExpressAdapter from '../../../adapter/ExpressAdapter';
import SkillRepositoryMemory from '../../../repository/SkillRepositoryMemory';

export default class SkillRouter {
  static create() {
    const router = express.Router();
    const skillRepository = new SkillRepositoryMemory();
    const skillController = new SkillController(skillRepository);

    router.get('/', ExpressAdapter.create(skillController.getSkills));
    router.post('/', ExpressAdapter.create(skillController.createSkill));

    return router;
  }
}