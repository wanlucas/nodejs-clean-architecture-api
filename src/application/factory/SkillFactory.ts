import SkillRepositoryMemory from "../../infra/repository/SkillRepositoryMemory";
import SkillController from "../controller/SkillController";

export default class SkillFactory {
  static getSkillsController(): Function {
    const skillRepository = new SkillRepositoryMemory();
    const skillController = new SkillController(skillRepository);

    return skillController.getSkills;
  }

  static createSkillController(): Function {
    const skillRepository = new SkillRepositoryMemory();
    const skillController = new SkillController(skillRepository);

    return skillController.createSkill;
  }
}