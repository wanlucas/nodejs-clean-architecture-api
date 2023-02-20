import CreateSkill from "../../domain/useCases/CreateSkill";
import GetSkills from "../../domain/useCases/GetSkills";
import SkillRepositoryMemory from "../../infra/repository/SkillRepositoryMemory";
import SkillController from "../controller/SkillController";

export default class SkillControllerFactory {
  static create(): SkillController {
    const skillRepository = new SkillRepositoryMemory();
    const getSkillsUseCase = new GetSkills(skillRepository);
    const createSkillUseCase = new CreateSkill(skillRepository);
    const skillController = new SkillController(
      getSkillsUseCase,
      createSkillUseCase,
    );

    return skillController;
  }
}